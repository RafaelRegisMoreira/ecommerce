import { Carrinho } from "./carrinho";
import { EnderecoEntrega } from "./endereco-entrega";
import { Favoritos } from "./favoritos";
import { MetodosPagamento } from "./metodos-pagamento";
import { Pedidos } from "./pedidos";

export class Usuarios {

    public id: number;
    public nome: string;
    public email: string;
    public senha: string;
    public admin: boolean;
    public enderecoEntrega: EnderecoEntrega [];
    public metodosPagamento: MetodosPagamento [];
    public pedidos: Pedidos [];
    public carrinho: Carrinho [];
    public favoritos: Favoritos []

    constructor() {
        this.id = 0,
        this.nome = '',
        this.email = '',
        this.senha = '',
        this.admin = false,
        this.enderecoEntrega = [],
        this.metodosPagamento = [],
        this.pedidos = [],
        this.carrinho = [],
        this.favoritos = []
    }
}
