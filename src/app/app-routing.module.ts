import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './component/home/home.component';
import { InternaCategoriaComponent } from './component/interna-categoria/interna-categoria.component';
import { InternaProdutoComponent } from './component/interna-produto/interna-produto.component';
import { InternaBuscaComponent } from 'src/shared/interna-busca/interna-busca.component';
import { LoginComponent } from 'src/shared/login/login.component';
import { CadastroComponent } from './component/cadastro/cadastro.component';
import { CrudEletroComponent } from './crud/crud-eletro/crud-eletro.component';
// import { AltenticacaoGuard } from '';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
