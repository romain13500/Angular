import { Component, Input } from "@angular/core";

@Component({
    selector: 'counter',
    template: `
        <h2>Compteur : {{ count }}</h2> 
       <button id="btn" (click)="increment()">+</button>
       <button (click)="decrement()">-</button> 
    `,
    styleUrls: ['../app.component.css']
})

export class CounterComponent {
    @Input('initial-value')
    count = 0;

    increment(){
        this.count++;
    }

    decrement(){
        this.count--;
    }
}