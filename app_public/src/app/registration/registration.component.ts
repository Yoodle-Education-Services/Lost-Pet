import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userInformationForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });


  constructor() { }

  ngOnInit(): void {
  }

}
