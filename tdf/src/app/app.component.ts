import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  topics = ['Angular', 'React', 'vue'];
  topicHasError = "true"

  userModel = new User('abc@gmail.com', 'nikhil12@#', 1234567890, 'default', 'evening', true)

  validateTopic(value: string){
    if (value === 'default'){
      this.topicHasError ="true";
    }
    else
    {
      this.topicHasError="false";
    }
  }
}
