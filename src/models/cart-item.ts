import { ProdutoDTO } from "./produto.dto";

export interface CartItem {
    quantidade: number, //deve ser igual ao backend
    produto: ProdutoDTO
}