import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Entregador } from 'src/app/models/entregador';
import { EntregadorService } from 'src/app/services/entregador.service';

@Component({
  selector: 'app-cadastro-entregador',
  templateUrl: './cadastro-entregador.component.html',
  styleUrls: ['./cadastro-entregador.component.scss']
})
export class CadastroEntregadorComponent implements OnInit {
  
  objeto: Entregador = new Entregador();
  formGroup!: FormGroup;

  constructor(
    private service: EntregadorService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.toastr.clear();
    this.objeto = new Entregador();
    this.loadData();
  }

  loadData() {
    
    this.route.params.subscribe((params) => {
      var id = params['id'];
      if (!id) {
        this.objeto = new Entregador();
      } 
      else {
        this.service.findById(id).subscribe(
          (entregador: Entregador) => {
            this.objeto = entregador;
          },
          (err) => {
            console.log('ocorreu um erro');
            this.toastr.error("Erro ao obter dados da empresa");
          }
        );
      }
    });
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      cnpj: [null, Validators.required],
      nome: [null, Validators.required],
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),

      endereco: [null, Validators.required],
      telefone: [null, Validators.required],
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
    this.service.save(this.objeto)
      .subscribe(
        (data) => {
          console.log('lesson saved successfully' + data)          
          this.toastr.success('Registro cadastrado com sucesso!', 'Sucesso');
          this.router.navigate(['/entregador']);
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

}