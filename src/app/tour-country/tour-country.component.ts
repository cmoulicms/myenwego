import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tour-country',
  templateUrl: './tour-country.component.html',
  styleUrls: ['./tour-country.component.css']
})
export class TourCountryComponent implements OnInit {
  selected = 'none';
  constructor() { }

  ngOnInit(): void {
  }

}
