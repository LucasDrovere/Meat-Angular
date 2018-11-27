import { CartItem } from "./shopping-cart.model";
import { MenuItem } from "../menu-item/menu-item.model";

export class ShoppingCartService{
    //Array de itens que representa o carrinho de compras
    items: CartItem[] = []

    //Limpa o array items = carrinho
    clear(){
        this.items = []
    }

    //Soma os valores dos itens que estão no array
    total(): number{
        return this.items
            //Tranforma o array de itens em um array de valores dos itens do array
            .map(item => item.value())
                //Soma os valores começando por 0
                .reduce((prev , value) => prev + value, 0)
    }

    //Adiciona itens no array
    addItem(item: MenuItem){
        //Procura se o item ja existe no array
        let foundItem= this.items.find((mItem) => mItem.menuItem.id === item.id)

        //Se tiver vai incrementar a quantidade desse item no carrinho
        if(foundItem){
            this.increaseQty(foundItem)
            //Se não adiciona o item no carrinho
        }else{
            this.items.push(new CartItem(item))
        }
    }

    //Remove um item do array = carrinho de compras
    removeItem(item: CartItem){
        this.items.splice(this.items.indexOf(item), 1)
    }

    //incrementa a quantidade do item existente na pagina de finalizar o pedido
    increaseQty(item: CartItem){
        item.quantity = item.quantity + 1
    }

    //decrementa a quantidade do item existente na pagina de finalizar o pedido
    decreaseQty(item: CartItem){
        item.quantity = item.quantity - 1
        if (item.quantity === 0){
            this.removeItem(item)
        }
    }


}