import { Injectable } from '@angular/core';
interface Pizza{
  id:number,
  name:string,
  price:number
}
interface Order {
  id : number,
  text : string
}


@Injectable({
  providedIn: 'root'
})


export class PizzaService {
  public menu : Pizza[] = [
    {id: 0, name: "Marco Polo", price: 65},
    {id: 1, name: "Roma", price: 60},
    {id: 2, name: "Margherita", price: 50},
    {id: 3, name: "Marinara", price: 70}
  ];

  orders : Order[] = [
    {id : 1, text: "Test order"}
  ];
  private nextOrderId : number = 2;
  private loggedIn = false;

  public redirectURL : string = "";

  constructor() { }

  IsUserLoggedIn() : boolean {
    return this.loggedIn;
  }

  LoginUser() {
    this.loggedIn = true;
  }

  FindPizza(id) : Pizza {
    return this.menu.find(pizza => pizza.id == id);
  }

  AddPizza(id, name, price) {
    let pizza = {
      id: id,
      name: name,
      price: price
    };
    this.menu.push(pizza);
    this.menu.sort((a,b) => a.id - b.id);
  }

  RemovePizza(id) {
    this.menu = this.menu.filter(pizza => pizza.id != id);
  }

  CreateOrder(text : string) : Order {
    let order = {
      id : this.nextOrderId,
      text : text
    };
    this.nextOrderId++;
    this.orders.push(order);
    return order;
  }
}
