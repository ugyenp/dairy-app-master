import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';
import { retry, catchError } from "rxjs/operators";
import { throwError } from 'rxjs';
import { HttpClient,  HttpHeaders, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

 private authUrl = 'http://localhost:8081/authenticate';
//  private authUrl = 'http://e1cf5b1e135d.ngrok.io/authenticate';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
        Accept: 'application/json',
    })
  }


  constructor(private http: HttpClient) {
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };


  login(userName: String, password: String) {
      return this.http
      .post<any>(this.authUrl, JSON.stringify({ userName: userName, password: password }), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }


}
