import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1> Directive structurelle </h1>

    <ng-template [if]="age >= 18" [ifElse]="autre" >
      <h2> Vous êtes majeur(e) donc le if fonctionne !</h2>      
    </ng-template>

    
    <ng-template #autre>
      <h2>Vous êtes mineur(e) donc le else fonctionne</h2>
    </ng-template>

    <h2 *if="age >= 18; else autre"> Vous êtes majeur(e) et le if avec étoile fonctionne</h2>
    

    <input type="number" placeholder="votre age" #ageInput>
    <button (click)="age = ageInput.valueAsNumber">Modifier l'age</button>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  age = 35

}
