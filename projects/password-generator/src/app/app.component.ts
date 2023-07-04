import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'password-generator';

  message = 'Cliquez sur le bouton "Générer"';

  password?: string;

  length = 50;
  uppercase = false;
  numbers = false;
  symbols = false;

  onClickGenerate(){
    this.message = 'Mon_password';
    console.log('Génération du password avec');
    console.table({
      uppercase: this.uppercase,
      numbers: this.numbers,
      symbols: this.symbols,
      length: this.length,
    })
  }

  
}
