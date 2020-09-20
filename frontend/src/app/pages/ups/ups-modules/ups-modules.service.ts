import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { throwError, Observable, interval } from 'rxjs';
import { shareReplay, catchError, startWith, flatMap, tap, map } from 'rxjs/operators';
import { Module } from './ups-modules';

@Injectable({
  providedIn: 'root'
})
export class UpsModuleService {
  private modulesUrl = 'https://solmm01.fmg.local/api/ups/modules';

  getUpsModules() {
    return this.http.get<Module[]>(this.modulesUrl)
 }

 ups$ = interval(10000)
          .pipe(
            startWith(0),
            flatMap(() => this.getUpsModules()),
            shareReplay(1),
            catchError(this.handleError)
          )


  constructor(private http: HttpClient) { }

  private handleError(err: any): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}