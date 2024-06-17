import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',           //nombre del componente
  template: `
    <p>counter: {{counter}}</p>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="decreaseBy(1)">-1</button>
    <button (click)="resetCounter()">Reset</button>
  `,  //lo que se muestra, esas comillas permiten varias lineas
})

export class CounterComponent {
  public counter: number = 10;

  increaseBy(value:number):void {
    this.counter += value;
  }

  decreaseBy(value:number):void {
    this.counter -= value;
  }

  resetCounter():void {
    this.counter = 10;
  }
}
