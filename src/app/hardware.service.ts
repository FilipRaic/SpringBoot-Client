import { Injectable } from '@angular/core';
import { Observable, of }  from "rxjs";
import { catchError, tap } from 'rxjs/operators';
import { Hardware } from "./hardware";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HardwareService {

  private hardwareUrl = 'http://localhost:8081/v1/hardware';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
  }

  constructor( private http: HttpClient ) { }

  getHardwareList(): Observable<Hardware[]> {
    return this.http.get<Hardware[]>(this.hardwareUrl)
    .pipe(
      tap(_ => console.log('fetched hardware')),
      catchError(this.handleError<Hardware[]>('getHardware', []))
    );
  }

  getHardware(code: string): Observable<Hardware> {
    return this.http.get<Hardware>(this.hardwareUrl + '/' + code)
    .pipe(
      tap(_ => console.log('fetched hardware code = ${code}')),
      catchError(this.handleError<Hardware>('getHardware code = ${code}'))
    );
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation);
      console.error(error);
      return of(result as T);
    }
  }
}
