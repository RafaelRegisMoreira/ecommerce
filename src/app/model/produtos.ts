import { Avaliacoes } from "./avaliacoes";
import { Dimensoes } from "./dimensoes";

export class Produtos {

    public id: number;
    public nome: string;
    public descricao: string;
    public preco: number;
    public imagem: string;
    public categoria: number;
    public idSubcategoria: number;
    public avaliacoes: Avaliacoes[];
    public estoque: number;
    public fabricante: string;
    public marca: string;
    public dimensoes: Dimensoes[]

    constructor() {
       this.id = 0;
       this.nome = '';
       this.descricao = '';
       this.preco = 0;
       this.imagem = '';
       this.categoria = 0;
       this.idSubcategoria = 0;
       this.avaliacoes = [];
       this.estoque = 0;
       this.fabricante = '';
       this.marca = '';
       this.dimensoes = []
    }
}
