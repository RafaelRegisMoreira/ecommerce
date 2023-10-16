import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorias } from 'src/app/model/categorias';
import { ConteudoSite } from 'src/app/model/conteudo-site';
import { Produtos } from 'src/app/model/produtos';
import { CategoriasService } from 'src/app/service/categorias.service';
import { ConteudoSiteService } from 'src/app/service/conteudo-site.service';
import { ProdutosService } from 'src/app/service/produtos.service';
import { SubCategoriasService } from 'src/app/service/sub-categorias.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  conteudoHome: ConteudoSite = new ConteudoSite()
  produtos: Produtos[] = []
  categorias: Categorias[] = []

  idDaUrl: number = 0

  constructor(
    private router: Router,
    private apiConteudo: ConteudoSiteService,
    private apiProdutos: ProdutosService,
    private apiCategorias: CategoriasService,
    private apiSubCategorias: SubCategoriasService,
    private rotaAtiva: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.idDaUrl = this.rotaAtiva.snapshot.params['id'],
      this.getAll()
  }

  getAll(): void {
    this.getContHome()
    this.getProdutos()
    this.getCategorias()
  }

  getContHome(): void {
    this.apiConteudo.getContHome().subscribe((data) => {
      this.conteudoHome = data
    })
  }
  getProdutos(): void {
    this.apiProdutos.getProdutos().subscribe((data) => {
      this.produtos = data
      
    })
  }
  getCategorias(): void {
    this.apiCategorias.getCategorias().subscribe((data) => {
      this.categorias = data

    })
  }
}
