import { Component, Output } from '@angular/core';
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

  get settingsCopy() {
    return {...this.settings};
  }

  
  onSettingsChange(obj: Settings) {
    this.settings = obj;
    console.table(this.settings);
    
  }

  onClickGenerate(){
    this.password = 'Mon_password';
    console.log('Génération du password avec');
    console.table(this.settings);
  }

  
}
