import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public SequencId = 1;
  //API base url
  
  base_path = 'http://localhost:8081/';
  // base_path = 'http://e1cf5b1e135d.ngrok.io/'
  
  token = JSON.parse(sessionStorage.getItem('currentUser'));

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ` + this.token.token
    })
  }


  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  //Get all user location
  getUserLocation(): Observable<any> {
    return this.http
      .get<any>(this.base_path + "user-location", this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  // Get user details from census data api
  fetchUserDetailsById(cid_number): Observable<any> {
    return this.http
      .get<any>(this.base_path + "getCitizenDetails/" + cid_number, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Get user details from census data database
  fetchUserDetailsByIdDb(id): Observable<any> {
    return this.http
      .get<any>(this.base_path + "census-api" + "/" + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Get user details from census data database
  fetchGovtFarmDetails(id): Observable<any> {
    console.log(id);
    return this.http
      .get<any>(this.base_path + "govt-farm-details" + "/" + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  //Fetch farmer or farm name, animal details and pedigree information by animal tagg number
  fetchFarmerOrFarmNameAnimalPedigreeDetailsFromTagNumber(): Observable<any> {
    console.log();
    return this.http
      .get<any>(this.base_path + "ai-animal-details", this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Get application number to update for non tagged registration
  fetchApplicationSequenceNumber(): Observable<any> {
    return this.http
      .get<any>(this.base_path + "application-sequence" + "/" + this.SequencId, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  //Get all adm details
  fetchDamDetails() {
    return this.http
      .get<any>(this.base_path + "pedigree-information", this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  //Get all adm details
  fetchSireDetails() {
    return this.http
      .get<any>(this.base_path + "pedigree-information", this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  //Register farmer's Animal
  registerFarmersAnimail(item) {
    return this.http
      // tslint:disable-next-line: max-line-length
      .post<any>(this.base_path + 'register-farmer-animal', JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }


  //Register government's farm Animal
  registerGovtFarmAnimail(item) {
    return this.http
      // tslint:disable-next-line: max-line-length
      .post<any>(this.base_path + 'register-govt-animal', JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  //Get list of breed type
  getBreedType() {
    return this.http
      .get<any>(this.base_path + 'breed-type', this.httpOptions).pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Get breed type by id
  getBreedTypeById(): Observable<any> {
    return this.http
      .get<any>(this.base_path + "application-sequence" + "/", this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Get artificial Insemination details by id
  getArtificialInseminationDetails(): Observable<any> {
    return this.http
      .get<any>(this.base_path + "artificial-insemination", this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Get ains  details by id
  getAiNsDetailsById(id): Observable<any> {
    return this.http
      .get<any>(this.base_path + "ains" + "/" + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Get all ains  audit by id
  getAiNsAuditDetails(): Observable<any> {
    return this.http
      .get<any>(this.base_path + "get-audit", this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Get all animal breeding status
  getAmimalBreedingStatus(): Observable<any> {
    return this.http
      .get<any>(this.base_path + "get-breeding-status", this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Update animal ai details
  updateBreedingStatus(id, item): Observable<any> {
    return this.http
      .post<any>(this.base_path + 'get-breeding-status' + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  //Save the AINS details in audit table
  saveAiNsDetailsAudit(item) {
    return this.http
      // tslint:disable-next-line: max-line-length
      .post<any>(this.base_path + 'update-audit', JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }



  // Get exoric blood percent of dam and sire
  getExoticBloodPercent() {
    return this.http
      .get<any>(this.base_path + 'exotic-blood', this.httpOptions).pipe(
        retry(1),
        catchError(this.handleError)
      )
  }


  // Update animal ai details
  upodateAiDetails(id, item): Observable<any> {
    return this.http
      .post<any>(this.base_path + 'update-ai/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  // Get exoric blood percent of dam and sire
  getVillageListFromGewogLookup(id) {
    return this.http
      .get<any>(this.base_path + 'get-village' + '/' + id, this.httpOptions).pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  //Save all animals ai details in AINS table
  saveAiAndNSTypeBreeding(item) {
    return this.http
      // tslint:disable-next-line: max-line-length
      .post<any>(this.base_path + 'ains', JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // event update for the animals
  eventUpdate(id, item): Observable<any> {
    return this.http
      .post<any>(this.base_path + 'even-type' + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  //Register clave detaiuls for both govt and farmer
  registerCalveDetails(item) {
    return this.http
      // tslint:disable-next-line: max-line-length
      .post<any>(this.base_path + 'register-calve', JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

}
