export class SubCategorias {

    public id: number;
    public nome: string;
    public descricao: string;
    public categoriaPai: number

    constructor() {
        this.id = 0,
        this.nome = '',
        this.descricao = '',
        this.categoriaPai = 0
    }
}
