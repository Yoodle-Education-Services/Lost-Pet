import { ConnectionService } from './../connection.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-petcustomers',
  templateUrl: './petcustomers.component.html',

  styleUrls: ['./petcustomers.component.css']
})
export class PetcustomersComponent implements OnInit {


  constructor(private fb: FormBuilder, private connectionService:ConnectionService) {

  }

  onFileChanged(event) {
    const file = event.target.files[0]
  }

  userInformationForm = this.fb.group({

    firstName:'',
    lastName: '',
    email: '',
    phone: '',
    petName: '',
    breed: '',
    description: '',
    location: '',
    lat: '',
    lng: '',
    upload: ''
  });

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("test");
    console.log(this.userInformationForm.value);
    this.connectionService.petcustomer(this.userInformationForm.value);
    // this.userInformationForm.value
    //   .subscribe(
    //     response => console.log('Success!', response),
    //     error => console.log('Error, error')
      // );


  }
// this for selection (lost found)
  selectPet: string = '';
  selectChangeHandeler(event: any) {
    this.selectPet = event.target.value;
  }
}


