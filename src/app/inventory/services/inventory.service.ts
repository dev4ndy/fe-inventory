import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from '../models/item.model';
import { Cellar } from '../models/cellar.model';
import { ApplicationHttp } from 'src/app/core/common/application-http';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(
    private http: ApplicationHttp
  ) {
  }

  byCellar(idCellar: string): Observable<Cellar> {
    const params = new HttpParams().set('cellarId', idCellar);
    return this.http.get('inventory/cellar', { params }).pipe(
      map(response => {
        return new Cellar().import(response);
      })
    );
  }

  transfer(data: string): Observable<boolean> {
    return this.http.post('inventory/transfer', data).pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }
}
