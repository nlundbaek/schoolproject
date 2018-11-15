import { Component, OnInit } from '@angular/core';
import {PizzaService} from "../pizza.service";
import {forEach} from "@angular/router/src/utils/collection";

interface Pizza{
  id:number,
  name:string,
  price:number
}

interface Orderline {
pizza:Pizza
  amount:number
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  public totalPrice = 0;
  public order:Orderline[] = [];
  constructor(private pizzaService : PizzaService) { }

  ngOnInit() {
  }

  GetMenu():Pizza[]{
    return this.pizzaService.menu;
  }

  AddPizza(pizzaid){
    let orderline = this.order.find(p => p.pizza.id == pizzaid );
    if(orderline){
      orderline.amount++;
    }else{
      this.order.push({pizza:this.GetMenu()[pizzaid], amount: 1});
    }
    this.CalculatePrice();
  }

  RemovePizza(pizzaid){
    let orderline = this.order.find(p => p.pizza.id == pizzaid);

    if (orderline){
      orderline.amount--;
      if(orderline.amount === 0){
        const indexOf = this.order.indexOf(orderline);
        this.order.splice(indexOf,1);

      }
    } else{

    }
    this.CalculatePrice();
  }

  CalculatePrice(){
    let price = 0;
    for( let item of this.order){
      price += item.pizza.price * item.amount;
    }
    this.totalPrice = price;
  }
}
