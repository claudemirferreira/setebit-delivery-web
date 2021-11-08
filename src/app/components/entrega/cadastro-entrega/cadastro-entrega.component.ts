import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Caixa } from 'src/app/models/caixa';
import { Entrega } from 'src/app/models/entrega';
import { Entregador } from 'src/app/models/entregador';
import { CaixaService } from 'src/app/services/caixa.service';
import { EntregaService } from 'src/app/services/entrega.service';
import { EntregadorService } from 'src/app/services/entregador.service';

@Component({
  selector: 'app-cadastro-entrega',
  templateUrl: './cadastro-entrega.component.html',
  styleUrls: ['./cadastro-entrega.component.scss']
})
export class CadastroEntregaComponent implements OnInit {
  
  objeto: Entrega = new Entrega();
  caixa: Caixa = new Caixa();
  listaEntregador: Entregador[] = [];
  entregador: Entregador = new Entregador();
  formGroup!: FormGroup;
  keyword = 'nome';

  constructor(
    private service: EntregaService,
    private entregadorService: EntregadorService,
    private caixaService: CaixaService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.toastr.clear();
    this.objeto = new Entrega();
    this.loadData();
    this.loadEntregadores();
    this.loadCaixaAtivo();
  }

  onShopSelectionChanged(event: any) {
    const selectedValue = event.option.id;
    console.log(selectedValue);
    const selectedName = event.option.value;
    console.log(selectedName);
}

  loadData() {    
    this.route.params.subscribe((params) => {
      var id = params['id'];
      if (!id) {
        this.objeto = new Entrega();
      } 
      else {
        this.service.findById(id).subscribe(
          (entrega: Entrega) => {
            this.objeto = entrega;
          },
          (err) => {
            console.log('ocorreu um erro');
            this.toastr.error("Erro ao obter dados da empresa");
          }
        );
      }
    });
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

  createForm() {
    this.formGroup = this.formBuilder.group({
      endereco: [null, Validators.required],
      numeroPedido: [null, Validators.required],
      valor: [null, Validators.required],
      taxa: [null, Validators.required],
    });
  }

  get f() {
    return this.formGroup.controls;
  }

  getFormGroupClass(isInvalid: boolean, isDirty: boolean): {} {
    return {
      'form-group': true,
      'has-error': isInvalid && isDirty,
      'has-success': !isInvalid && isDirty,
    };
  }

  save(formDirective: FormGroupDirective): void {
    // if (this.formGroup.invalid) {
    //   return;
    // }

    this.objeto.caixa = this.caixa;
    this.service.save(this.objeto)
      .subscribe(
        (data) => {
          console.log('lesson saved successfully' + data)          
          this.toastr.success('Registro cadastrado com sucesso!', 'Sucesso');
          this.router.navigate(['/entrega']);
        },
        (err) => {
          console.log(err)
          this.toastr.error('Ocorreu um error!', 'Error');
        });
    
  }
  
  onReset(formDirective: FormGroupDirective) {
    this.formGroup.reset();
    formDirective.resetForm();
  }


  selectEvent(item: any) {
    // do something with selected item

    this.objeto.entregador = item;
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