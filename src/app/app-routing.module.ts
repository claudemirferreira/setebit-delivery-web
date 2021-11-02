import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    path:"cadastro-entregador", component:CadastroEntregadorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
