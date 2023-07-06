import { Component } from '@angular/core';
import { TaxesService } from './services/taxes.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Injection de dépendances</h1>
    <br>
    <recap></recap>
    <declaration-impots></declaration-impots>
  `,
  styles: [],
  // providers: [TaxesService] DEPLACER DANS APP MODULE
})
export class AppComponent {
  title = 'injection';
}
