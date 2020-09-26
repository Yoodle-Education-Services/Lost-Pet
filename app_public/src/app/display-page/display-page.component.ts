
import { Component, OnInit } from '@angular/core';
import { petcustomerModel} from './petcustomerModel';

@Component({
  selector: 'app-display-page',
  templateUrl: './display-page.component.html',
  styleUrls: ['./display-page.component.css']
})
export class DisplayPageComponent implements OnInit {
  // petcustomer: petcustomer[] = [
  //   {
  //     firstName:"Geoge",
  //     lastName: "Miller",
  //     email: "geo@gmail.com",
  //     phoneName:816-499-6543,
  //     breed:"Dog",
  //     description:"lost a pet",
  //     location: "31th street",
  //     lat: 34.45678,
  //     lng:-23.45675
	//     },
  //   {
  //     firstName: "Tide",
  //     lastName: "Bulk",
  //     email: "td@gmail.com",
  //     phoneName: 816-434-2345,
  //     breed: "Cat",
  //     description:" red spots on face",
  //     location: "104 E Filler street",
  //     lat:999999,
  //     lng:888888
	//     },
  //   {
  //     firstName:" Jimmy",
  //     lastName:"Mustag",
  //     email: "mast@getMaxListeners.com",
  //     phoneName: 816-456-6543,
  //     breed:"Dog",
  //     description:" no special description",
  //     location: "87th Street, KC",
  //     lat:45454545,
  //     lng:67564323,
	//     },
  // ]




  constructor() { }

  ngOnInit(): void {
  }

}
