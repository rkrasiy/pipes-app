import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

type SortType = "name" | "canFly" | "color";

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {
  public sortBy?: "name" | "canFly" | "color";
  public isUpperCase: boolean = false;
  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red
    },
  ]

  changeSortBy( sort: SortType ):void {
    this.sortBy = sort;
  }

  toggleUpperCase():void {
    this.isUpperCase = !this.isUpperCase;
  }

}
