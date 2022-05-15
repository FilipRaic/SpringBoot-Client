import { Injectable } from '@angular/core';
import { Observable, of }  from "rxjs";
import { catchError, tap } from 'rxjs/operators';
import { Review } from "./review";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewServiceService {

  private reviewsUrl = 'http://localhost:8081/v1/reviews';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
  }

  constructor( private http: HttpClient ) { }

  getReviewList(): Observable<Review[]> {
    return this.http.get<Review[]>(this.reviewsUrl)
    .pipe(
      tap(_ => console.log('fetched reviews')),
      catchError(this.handleError<Review[]>('getReviews', []))
    );
  }

  getReviewsForHardware(code: string): Observable<Review[]> {
    return this.http.get<Review[]>(this.reviewsUrl + '/' + code)
    .pipe(
      tap(_ => console.log('fetched reviews for hardware')),
      catchError(this.handleError<Review[]>('getReviews for hardware', []))
    );
  }

  getReviewByText(title: string): Observable<Review> {
    return this.http.get<Review>(this.reviewsUrl + '/byText/' + title)
    .pipe(
      tap(_ => console.log('fetched review by text')),
      catchError(this.handleError<Review>('getReview by text'))
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