import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database/angular-fire-database';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private db: AngularFireDatabase) { }

  getOperators() {
    return this.db.list('/operators');
  }

  create(tour) {
    return this.db.list('/tours').push(tour);
  }

  getAll() {
    return this.db.list('/tours');
  }

  get(tourId) {
    return this.db.object('/tours/' + tourId);
  }

  update(tourId, tour) {
    return this.db.object('/tours/' + tourId).update(tour);
  }

  delete(tourId) {
    return this.db.object('/tours/' + tourId).remove();
  }
}
