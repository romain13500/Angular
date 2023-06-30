import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'password-generator';

  message = 'Cliquez sur le bouton "Générer"';

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

  onChangeLength(event: Event){
    const element = event.target as HTMLInputElement;
    this.length = +element.value;
  }

  onChangeSetting(settingName: string, settingValue: boolean){
    if (settingName !== "uppercase" && settingName !== "numbers" && settingName !== "symbols") {
      return;
    }
    this[settingName] = settingValue;
  }
}
