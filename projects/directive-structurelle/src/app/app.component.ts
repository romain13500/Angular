import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1> Directive structurelle </h1>

    <ng-template #monTemplate>
            <h2> hello world</h2>
        </ng-template>

        <ng-container #monContainer>
            <h3>je suis le container </h3>
        </ng-container>

        <button (click)="onClick()">Tester</button>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  onClick() {}
 

}
