const { query, json } = require('express');
const express = require('express');
const connection = require('../connection');
const router = express.Router();

const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
require('dotenv').config();

//Post Method for signup

router.post('/sign-up', (req, res) => {
    let user = req.body;
    let query = "select email,password,role,status from user where email=?"
    connection.query(query, [user.email], (err, results) => {
        if (!err) {
            if (results.length <= 0) {
                query = "insert into user(name,contactNumber,email,password,status,role) values(?,?,?,?,'false','user')"
                connection.query(query, [user.name, user.contactNumber, user.email, user.password], (err, results) => {
                    if (!err) {
                        return res.status(200).json({ message: "Suscessfully Registered" });
                    }
                    else { return res.status(400).json({ message: "Email Already Exist." }) }

                })
            }
            else {
                return res.status(400).json({ message: "Email already Exist." });
            }
        }
        else {
            return res.status(500).json(err);
        }
    });


})

//Post Method for login

router.post('/log-in', (req, res) => {
    let user = req.body;
    let query = "select email,password,role,status from user where email=?"
    connection.query(query, [user.email], (err, results) => {
        if (!err) {
            if (results.length <= 0 || results[0].password != user.password) {

                return res.status(401).json({ message: "Incorrect UserName and Password" })


            }


            else if (results[0].status === 'false') {
                return res.status(401).json({ message: "Wait for admin Approval" })

            }

            else if (results[0].password == user.password) {
                const response = { email: results[0].email, role: results[0].role }
                const accessToken = jwt.sign(response, process.env.ACCESS_TOKEN, { expiresIn: '8h' })
                res.status(200).json({ token: accessToken });
            }

            else {
                return res.status(400).json({ message: "Email already Exist" });
            }


        }
    });
})

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

router.post('/forgot-pass', (req, res) => {
    const user = req.body;
    let query = 'select email,password from user where email=?'
    connection.query(query, [user.email], (err, results) => {
        if (!err) {
            if (results.length <= 0) {
                return res.status(200).json({ message: "Password sent successfullyy to your email" });

            }

            else {
                var mailOptions = {
                    from: process.env.EMAIL,
                    to: results[0].email,
                    subject: 'Password by Cafe Management System',
                    html: '<p><b> Your login details for cafe Management system</b><br><b>Email:</b>' + results[0].email + '<br><b>Password: </b>' + results[0].password + '<br><a href="http://localhost:4200">Click here to login</p>'
                };
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    }
                    else {
                        console.log('Email sent:' + info.response);
                        console.log("sucess");

                    }
                });
                return res.status(200).json({ message: "Password sent successfully to your email" });

            }
        }

        else {
            return res.status(500).json(err);
        }


    })

})

//Get method for all users

router.get('/get', (req, res) => {
    var query = "select id,name,email,contactNumber,status from user where role='user'";
    connection.query(query, (err, results) => {
        if (!err) {
            return res.status(200).json(results)
        }
        else {
            return res.status(500).json(err);
        }
    })
})

//Update API for user

router.patch('/update', (req, res) => {
    let user = req.body;
    var query = 'update user set status=? where id=?';
    connection.query(query, [user.status, user.id], (err, results) => {
        if (!err) {
            if (results.affectedRows == 0) {
                return res.status(404).json({ message: 'User Id does not exist' });
            }
            return res.status(200).json({ message: 'User Updated Successfully' });
        }

        else {
            return res.status(500).json(err);
        }

    })

})

router.get('/checkToken', (req,res)=>{
    return res.status(200).json({message:"true"});
})

router.post('/checkPassword', (req,res)=>{
    
})

module.exports = router;
