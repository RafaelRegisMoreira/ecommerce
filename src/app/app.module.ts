// MODULOS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// COMPONENTES
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { InternaProdutoComponent } from './component/interna-produto/interna-produto.component';
import { InternaBuscaComponent } from '../shared/interna-busca/interna-busca.component';
import { InternaCategoriaComponent } from './component/interna-categoria/interna-categoria.component';
import { CadastroComponent } from './component/cadastro/cadastro.component';
import { CrudEletroComponent } from './crud/crud-eletro/crud-eletro.component';
import { HeaderComponent } from 'src/shared/header/header.component';
import { FooterComponent } from 'src/shared/footer/footer.component';
import { LoginComponent } from 'src/shared/login/login.component';

// BIBLIOTECAS
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InternaProdutoComponent,
    InternaBuscaComponent,
    InternaCategoriaComponent,
    CadastroComponent,
    CrudEletroComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
