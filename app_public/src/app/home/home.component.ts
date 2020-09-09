import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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


  constructor() { }

  ngOnInit(): void {
  }

}
