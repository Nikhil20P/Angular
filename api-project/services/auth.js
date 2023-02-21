require('dotenv').config();
const jwt = require('jsonwebtoken');

function authToken(req,res,next){
    const authHeader = req.headers['authorization']
}