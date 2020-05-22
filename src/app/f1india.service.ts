import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Operator } from './operators';
import { Observable } from 'rxjs/internal/Observable';
import { Tours } from './tours';

@Injectable({
  providedIn: 'root'
})
export class F1indiaService {

  constructor(private http: HttpClient) { }

  f1indiaOperator = 'https://sub1.f1india.net/api/operators';

  getOperator(): Observable<Operator[]> {
    return this.http.get<Operator[]>(this.f1indiaOperator);
  }

  getTours(): Observable<Tours[]> {
    return this.http.get<Tours[]>(this.f1indiaOperator);
  }
}
