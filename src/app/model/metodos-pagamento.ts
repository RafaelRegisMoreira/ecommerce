import { CartaoCredito } from "./cartao-credito";
import { PayPal } from "./pay-pal";
import { Pix } from "./pix";

export class MetodosPagamento {

    public cartaoCredito: CartaoCredito;
    public pix: Pix;
    public payPal: PayPal

    constructor(){
        this.cartaoCredito = {},
        this.pix = {},
        this.payPal = {}
    }
}
