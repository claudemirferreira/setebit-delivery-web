import { Caixa } from "./caixa";
import { Entregador } from "./entregador";

export class Entrega {
    id!: number;
    numeroPedido!: string;
    nome!: Date;
    endereco!: string;
    valor!: number;
    taxa!: number;
    status!: string;
    entregador!: Entregador;
    caixa!: Caixa;
}