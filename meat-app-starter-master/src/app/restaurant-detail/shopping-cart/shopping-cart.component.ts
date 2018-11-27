import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private service: ShoppingCartService) { }

  ngOnInit() {

  }

  //Mostra todos os itens do array no carrinho de compras
  items(): any[] {
    return this.service.items;
  }

  //Soma os valores do carrinho de compra
  total(): number {
    return this.service.total()
  }

  //Limpa os itens do carrinho de compras
  clear() {
    this.service.clear()
  }

  //Remove um item especifico do carrinho de compras
  removeItem(item: any){
    this.service.removeItem(item)
  }

  //Adiciona um arquivo no carrinho
  addItem(item: any){
    this.service.addItem(item)
  }
}
