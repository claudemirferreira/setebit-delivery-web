import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Entregador } from 'src/app/models/entregador';
import { EntregadorService } from 'src/app/services/entregador.service';

@Component({
  selector: 'app-entregador',
  templateUrl: './entregador.component.html',
  styleUrls: ['./entregador.component.scss']
})
export class EntregadorComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'actions'];
  lista: Entregador[] = [];

  constructor(
    private service : EntregadorService,
    private toastr: ToastrService,
    private router: Router
  ) { }

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

  novo(){
    alert('oi');
  }

  delete(id: number): void {
    this.service.delete(id)
      .subscribe(
        (data) => {
          console.log('lesson saved successfully' + data)          
          this.toastr.success('Registro excluído com sucesso!', 'Sucesso');
          this.list();
        },
        (err) => {
          console.log('ocorreu um error ' + err) 
          this.toastr.error('Ocorreu um error!', 'Error');
        });
    
  }
  

}