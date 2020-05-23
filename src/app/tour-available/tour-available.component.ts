import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database/angular-fire-database';
import { AppTour } from './tour/app-tour';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-tour-available',
  templateUrl: './tour-available.component.html',
  styleUrls: ['./tour-available.component.css']
})
export class TourAvailableComponent implements OnInit {

  tours: any[];
  displayedColumns: string[] = ['title', 'type', 'operatedBy', 'cost', 'imageUrl', 'action'];
  dataSource = new MatTableDataSource<AppTour>(this.tours);


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(private db: AngularFireDatabase) {
    db.list('/tours').snapshotChanges()
    .subscribe( tours => {
      this.tours = tours;
    })
   }

  ngOnInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
