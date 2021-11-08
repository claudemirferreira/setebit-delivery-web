import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Caixa } from '../models/caixa';

@Injectable({
  providedIn: 'root'
})
export class CaixaService {
  private readonly API = `${environment.URL_BASE}caixa/`;

  constructor(private http: HttpClient) {}
  
  findCaixaAtivo(){
    return this.http.get<Caixa>(this.API + 'ativo');
  }
}
