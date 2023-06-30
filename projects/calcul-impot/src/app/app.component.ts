import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calcul-impot';
  message = "Votre revenu après imposition est de : "
  revenuDeBase = 1000;
  impot = 500;
  

  calculImpot(){
    const impots = this.revenuDeBase + this.impot;
    return window.alert('Votre revenu est de :' + impots + '€');
    
  }
}
