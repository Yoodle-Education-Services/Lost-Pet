import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LostandfoundService } from '../lostandfound.service';

@Component({
  selector: 'app-markmap',
  templateUrl: './markmap.component.html',
  styleUrls: ['./markmap.component.css']
})
export class MarkmapComponent implements OnInit {

  constructor(private lostandfoundservice: LostandfoundService) { }

  latitude: number = 39.107705;
  longitude: number = -94.582979;
  zoom: number = 17;

  markLocation(event: {coords: {lat: number; lng:number;};}) {
    
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng; 
    this.lostandfoundservice.markLocation(this.latitude, this.longitude);
  
  }
  
  ngOnInit(): void {
  }

}
