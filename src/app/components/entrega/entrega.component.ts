import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Caixa } from 'src/app/models/caixa';
import { Entregador } from 'src/app/models/entregador';
import { CaixaService } from 'src/app/services/caixa.service';
import { EntregaService } from 'src/app/services/entrega.service';
import { EntregadorService } from 'src/app/services/entregador.service';

@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.component.html',
  styleUrls: ['./entrega.component.scss']
})
export class EntregaComponent implements OnInit {

  caixa= new Caixa();
  listaEntregador: Entregador[] = [];
  entregador: Entregador = new Entregador();
  keyword = 'nome';

  constructor(
    private entregaService: EntregaService,
    private entregadorService: EntregadorService,
    private caixaService: CaixaService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {

   }

  ngOnInit(): void {
    this.loadCaixaAtivo();
    this.loadEntregadores();
  }

  loadEntregadores() {
    let entregador = new Entregador();
    entregador.status = '1';
    entregador.nome = '';
    this.route.params.subscribe((params) => {
        this.entregadorService.list(entregador).subscribe(
          (data) => {
            console.log(JSON.stringify(data))
            this.listaEntregador = data;
          },
          (err) => {
            console.log('ocorreu um erro');
            this.toastr.error("Erro ao obter dados da empresa");
          }
        );
    });
  }

  loadCaixaAtivo() {
    this.route.params.subscribe((params) => {
        this.caixaService.findCaixaAtivo().subscribe(
          (data) => {
            console.log(JSON.stringify(data))
            this.caixa = data;
          },
          (err) => {
            console.log('ocorreu um erro');
            this.toastr.error("Erro ao obter dados da empresa");
          }
        );
    });
  }

  selectEvent(item: any) {
    // do something with selected item

    //this.objeto.entregador = item;
    console.log(JSON.stringify(item))
  }

  onChangeSearch(val: string) {

    console.log(JSON.stringify(val))
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e: any){
    console.log(JSON.stringify(e))
    // do something when input is focused
  }
}