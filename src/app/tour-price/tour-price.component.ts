import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tour-price',
  templateUrl: './tour-price.component.html',
  styleUrls: ['./tour-price.component.css']
})
export class TourPriceComponent implements OnInit {
  selected = 'none';
  constructor() { }

  ngOnInit(): void {
  }

}
