import { Injectable } from '@angular/core';
import { ApplicationHttp } from 'src/app/core/common/application-http';
import { Cellar } from '../models/cellar.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CellarService {

  constructor(
    private http: ApplicationHttp
  ) { }

  index(): Observable<Array<Cellar>> {
    return this.http.get('cellar/index').pipe(
      map((response: any) => {
        return response.map((cellar: any) => new Cellar().import(cellar));
      })
    );
  }
}
