import { Component, OnInit } from '@angular/core';
import { Entregador } from 'src/app/models/entregador';
import { EntregadorService } from 'src/app/services/entregador.service';

@Component({
  selector: 'app-entregador',
  templateUrl: './entregador.component.html',
  styleUrls: ['./entregador.component.scss']
})
export class EntregadorComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome'];
  lista: Entregador[] = [];

  constructor(private service : EntregadorService) { }

  ngOnInit(): void {
    this.list();
  }
  
  list(){
   this.service.list().subscribe(
     dados => {
      this.lista = dados;
      console.log('result = ' + this.lista);
     });
  }
}