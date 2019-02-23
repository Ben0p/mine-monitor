import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { getMatIconFailedToSanitizeUrlError } from "@angular/material";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

const APIurl: String = "http://10.20.64.253:5000/";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private returnFalse<T>(operation = "operation", result?: T) {
    var status = {'online' : result}
    return of(result as T)
  }

  /*
  getSigns() {
    return this.http.get('/assets/json/signs.json');
  }
  */

  getAlerts(): Observable<any> {
    return this.http.get(APIurl + "alert").pipe(
      map(this.extractData),
      catchError(this.handleError<any>("failed"))
    );
  }

  alertDetail(ip): Observable<any> {
    return this.http.get(APIurl + "alert/" + ip).pipe(map(this.extractData));
  }

  getFleet(): Observable<any> {
    return this.http.get(APIurl + "fleet").pipe(map(this.extractData));
  }

  getTrailers(): Observable<any> {
    return this.http.get(APIurl + "trailers").pipe(map(this.extractData));
  }

  trailerDetail(name): Observable<any> {
    return this.http.get(APIurl + "trailers/" + name).pipe(map(this.extractData));
  }

  getCorrections(): Observable<any> {
    return this.http.get(APIurl + "corrections").pipe(map(this.extractData));
  }

  getServices(): Observable<any> {
    return this.http.get(APIurl + "services").pipe(map(this.extractData));
  }

  getGpsList(): Observable<any> {
    return this.http.get(APIurl + "corrections/list").pipe(map(this.extractData));
  }

  fleetDetail(name): Observable<any> {
    return this.http.get(APIurl + "fleet/" + name).pipe(map(this.extractData));
  }

  getOverview(): Observable<any> {
    return this.http.get(APIurl + "overview").pipe(map(this.extractData));
  }

  checkConnection(): Observable<any> {
    return this.http.get(APIurl + "check")
    .pipe(
      map(this.extractData),
      catchError( error => { 
        return of({online: false});
      })
    )
  }

  setOutputs(name, outputs): Observable<any> {
    return this.http
      .post<any>(APIurl + "alert/" + name, JSON.stringify(outputs), httpOptions)
      .pipe(
        tap(outputs => console.log(console.log(outputs))),
        catchError(this.handleError<any>("setOutputs"))
      );
  }

  edit(device): Observable<any> {
    return this.http
      .post<any>(APIurl + "edit", JSON.stringify(device), httpOptions)
      .pipe(
        tap(outputs => console.log("Edited device")),
        catchError(this.handleError<any>("error"))
      );
  }

  delete(type, device): Observable<any> {
    return this.http.delete<any>(APIurl + "edit/" + type + "-" + device).pipe(
      tap(outputs => console.log("Deleted device")),
      catchError(this.handleError<any>("error"))
    );
  }

  getCorrectionsFile(): Observable<Blob> {   
    //const options = { responseType: 'blob' }; there is no use of this
        // this.http refers to HttpClient. Note here that you cannot use the generic get<Blob> as it does not compile: instead you "choose" the appropriate API in this way.
        return this.http.get(APIurl + "corrections/file", { responseType: 'blob' });
    }
}
