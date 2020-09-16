import { ConnectionService } from './connection.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validator } from '@angular/forms';
import { from } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {
  constructor(private fb: FormBuilder){}
   userInformationForm = this.fb.group({

    firstName:[] ,
    lastName:[],
    email:[],
    phone:[],
    petName:[],
    breed:[],
    description:[],
    location:[]

 });
//  onSubmit(){
//    console.log('this.userInformationForm.value');

//  }

 // title = 'petproject';
  // userInformationForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   email: new FormControl(''),
  //   phone: new FormControl(''),
  //   petName: new FormControl(''),
  //   breed: new FormControl(''),
  //   description: new FormControl(''),
  //   location: new FormControl(''),

  // });

  // constructor(private fb: FormBuilder, connectionService: ConnectionService) { };
 onSubmit() {
   console.log(this.userInformationForm.value);
  this.userInformationForm.value
     .subscribe(
       response => console.log('Success!', response),
       error => console.log('Error, error')
     );


 }



}
