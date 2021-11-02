import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, first, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Entregador } from '../models/entregador';

@Injectable({
  providedIn: 'root'
})
export class EntregadorService {

  // private readonly API = '/assets/caixa.json';
  private readonly API = `${environment.URL_BASE}entregador/`;

  constructor(private http: HttpClient) {}

  list(): Observable<Entregador[]> {
    return this.http.get<Entregador[]>(this.API)
      .pipe(
        tap(console.log)
      )
  }

  list1(): Observable<Entregador[]> {
    return this.http.get<Entregador[]>(this.API)
    .pipe(
      first(),
      // delay(5000),
      tap(courses => console.log(courses))
    );
  }

  save(objeto: Entregador) {
    return this.http.post(this.API, objeto);
  }

  delete(id:number){
    return this.http.delete(this.API + id);
  }
  
  findById(id: number){
    return this.http.get<Entregador>(this.API + id);
  }

}