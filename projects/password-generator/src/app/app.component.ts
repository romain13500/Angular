import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Générez un mot de passe ! </h1>
      <div class="grid">

        <password-display [message]="message"></password-display>

        <div>
          <label for="length">Longueur de mot de passe : {{ length }}</label>
          <input  [(ngModel)]="length" id="length" type="range" min="10" max="50" name="length"/>

          <label>
            <input  [(ngModel)]="uppercase" role="switch" type="checkbox" name="uppercase" id="uppercase"/>
            Contiendra des "MAJUSCULES"
          </label>
          <label>
            <input  [(ngModel)]="numbers" role="switch" type="checkbox" name="numbers" id="numbers"/>
            Contiendra des "Nombres"
          </label>
          <label>
            <input  [(ngModel)]="symbols" role="switch" type="checkbox" name="symbols" id="symbols"/>
            Contiendra des "Caractères spéciaux"
          </label>
          <password-controls (generate)="onClickGenerate()"></password-controls>
        </div>
      </div>
    </div>
  `,
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
