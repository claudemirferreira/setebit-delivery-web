import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Entrega } from '../models/entrega';

@Injectable({
  providedIn: 'root'
})
export class EntregaService {

   // private readonly API = '/assets/caixa.json';
   private readonly API = `${environment.URL_BASE}entrega/`;

   constructor(private http: HttpClient) {}
 
   list(entrega:Entrega): Observable<Entrega[]> {
     let url = this.API;
     return this.http.get<Entrega[]>(url)
       .pipe(
         tap(console.log)
       )
   }
 
   save(objeto: Entrega) {
     return this.http.post(this.API, objeto);
   }
 
   delete(id:number){
     return this.http.delete(this.API + id);
   }
   
   findById(id: number){
     return this.http.get<Entrega>(this.API + id);
   }
}