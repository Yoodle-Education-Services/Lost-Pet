import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-petcustomers',
  templateUrl: './petcustomers.component.html',

  styleUrls: ['./petcustomers.component.css']
})
export class PetcustomersComponent implements OnInit {

  constructor(private fb: FormBuilder) {

  }
  userInformationForm = this.fb.group({

    firstName: [],
    lastName: [],
    email: [],
    phone: [],
    petName: [],
    breed: [],
    description: [],
    location: []

  });

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.userInformationForm.value);
    this.userInformationForm.value
      .subscribe(
        response => console.log('Success!', response),
        error => console.log('Error, error')
      );


  }
}
