import { Injectable } from '@angular/core';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Coords } from './coords';

@Injectable({
  providedIn: 'root'
})

export class LostandfoundService {

  locationMarked:boolean = false;
  
  returnCoords: Coords = {
    lat:  39.107705,
    lng:  -94.582979
  }

  latitude: number;
  longitude: number;

  private coordsSource = new BehaviorSubject(this.returnCoords);
  currentCoords = this.coordsSource.asObservable();

  @Output() messageEvent = new EventEmitter();

  constructor() { }

  changeCoords(message: string) {
    this.coordsSource.next(this.returnCoords)
  }

  markLocation(latitude: number, longitude: number) {

    this.locationMarked = true;

    this.returnCoords.lat = latitude;
    this.returnCoords.lng = longitude;

    this.latitude = latitude;
    this.longitude = longitude;
    // console.log("returnCoords:  ", this.returnCoords)
    this.messageEvent.emit(this.returnCoords);
  }

  getLocationDetails() {
    // console.log("service.lat ", this.latitude, "  service.lng ", this.longitude);
    return[this.latitude, this.longitude]; 
  }

}