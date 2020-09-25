import { Component, OnInit } from '@angular/core';
import { LostandfoundService } from '../lostandfound.service';
import { Coords } from '../coords';

@Component({
  selector: 'app-lost-page',
  templateUrl: './lost-page.component.html',
  styleUrls: ['./lost-page.component.css']
})

export class LostPageComponent implements OnInit {

  
  returnCoords: Coords = {
    lat:  39.107705,
    lng:  -94.582979
  }

  constructor(private lostandfoundservice: LostandfoundService) { }

  page: string = "Lost Pet Form"

  latitude: number = 39.107705;
  longitude: number = -94.582979;
  

  receiveMessage() {

    let loc = this.lostandfoundservice.getLocationDetails();

    console.log("new latitude = "+loc[0]+"  new longitude = "+loc[1]);
    this.latitude = loc[0];
    this.longitude = loc[1];
    console.log("new latitude = "+this.latitude+"  new longitude = "+this.longitude);
    
  }

  ngOnInit(): void {
    this.lostandfoundservice.currentCoords.subscribe(x => this.returnCoords = x)
  }
 
}