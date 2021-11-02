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

  list(entregador:Entregador): Observable<Entregador[]> {
    let url = this.API;
    if(entregador.nome.length > 0)
       url = url + '?nome='+entregador.nome;
    return this.http.get<Entregador[]>(url)
      .pipe(
        tap(console.log)
      )
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