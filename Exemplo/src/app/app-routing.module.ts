import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './views/contato/contato.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
{path: "contato", component: ContatoComponent},
{path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
