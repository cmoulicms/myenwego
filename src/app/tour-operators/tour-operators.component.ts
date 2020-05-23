import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AppOperator } from './operator/app-operator';



@Component({
  selector: 'app-tour-operators',
  templateUrl: './tour-operators.component.html',
  styleUrls: ['./tour-operators.component.css']
})
export class TourOperatorsComponent implements OnInit {
  operators: any[];
  displayedColumns: string[] = ['name', 'description','imageUrl', 'action'];
  dataSource = new MatTableDataSource<AppOperator>(this.operators);

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor( private db: AngularFireDatabase) {
    db.list('/operators').snapshotChanges()
    .subscribe( operators => {
      this.operators = operators;
    });
   }
}
