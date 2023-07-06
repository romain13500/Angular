import { Component, Output } from '@angular/core';
import { PasswordGeneratorService } from './password-generator.service';
import { Settings } from './types';


@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Générez un mot de passe ! </h1>
      <div class="grid">

        <password-display [password]="password"></password-display>

        <div>
          <password-settings 
            [default-settings]="settingsCopy"
            (settings-change)="onSettingsChange($event)" 
          ></password-settings>
          <hr>
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

  settings: Settings = {
    length: 30,
    uppercase: false,
    numbers: false,
    symbols: false,
  };

  constructor(private service: PasswordGeneratorService) {}

  get settingsCopy() {
    return {...this.settings};
  }

  
  onSettingsChange(obj: Settings) {
    this.settings = obj;
  }

  onClickGenerate(){
    this.password = this.service.generate({
      length: this.settings.length,
      uppercase: this.settings.uppercase,
      numbers: this.settings.numbers,
      symbols: this.settings.symbols,
    });
    console.log('Génération du password avec');
    console.table(this.settings);
  }

  
}
