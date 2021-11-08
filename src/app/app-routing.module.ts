import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroEntregaComponent } from './components/entrega/cadastro-entrega/cadastro-entrega.component';
import { EntregaComponent } from './components/entrega/entrega.component';
import { CadastroEntregadorComponent } from './components/entregador/cadastro-entregador/cadastro-entregador.component';
import { EntregadorComponent } from './components/entregador/entregador.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path:"login", component:LoginComponent
  },
  {
    path:"entregador", component:EntregadorComponent
  },
  {
    path:"entregador/editar-entregador/:id", component:CadastroEntregadorComponent
  },
  {
    path:"cadastro-entregador", component:CadastroEntregadorComponent
  },
  {
    path:"entrega", component:EntregaComponent
  },
  {
    path:"cadastro-entrega", component:CadastroEntregaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
