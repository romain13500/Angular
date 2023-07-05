import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Injection de dépendances</h1>
    <br>

    <declaration-impots></declaration-impots>
  `,
  styles: []
})
export class AppComponent {
  title = 'injection';
}
