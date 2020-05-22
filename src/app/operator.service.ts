import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database/angular-fire-database';
import { AppOperator } from './tour-operators/operator/app-operator';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {
  constructor(private db: AngularFireDatabase) { }

 create(operator) {
   return this.db.list('/operators').push(operator);
 }

 getAll(){
   return this.db.list('/operators');
 }

 get(operatorId) {
   return this.db.object('/operators/' + operatorId);
 }

 update(operatorId, operator) {
   return this.db.object('/operators/' + operatorId).update(operator);
 }

 delete(operatorId) {
   return this.db.object('/operators/' + operatorId).remove();
 }
}
