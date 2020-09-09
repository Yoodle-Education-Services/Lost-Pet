
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validator } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {
  title = 'petproject';
  userInformationForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    petName: new FormControl(''),
    breed: new FormControl(''),
    description: new FormControl(''),
    location: new FormControl(''),

  });

 onSubmit() {
   console.warn(this.userInformationForm.value);
 }



}
