import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1> Directive structurelle </h1>

    <h2>pagination</h2>

    <a href="#" *repeat="pages; let numero">Page {{numero}}</a>
    <button (click)="pages = pages + 1">Ajouter une page</button>

    <hr>
    <h2>exercice loop personnes</h2>
    <ul>
      <ng-template [loopOf]="personnes" let-personne let-numero="index">
        <li>{{personne.prenom}} {{personne.nom}} ({{numero + 1}})</li>
      </ng-template>
    </ul><br>

    <hr><br>

    <ul>
        <li *loop="let personne of personnes; let numero = index">
          {{personne.prenom}} {{personne.nom}} ({{numero + 1}})
        </li>
    </ul>
    
    <ul>
        <li *ngFor="let personne of personnes; let numero = index">
          {{personne.prenom}} {{personne.nom}} ({{numero + 1}})
        </li>
    </ul>
    <button (click)="addPersonne()">Ajouter une personne</button>
    <br>

    <hr><br>

    <ng-template [if]="age >= 18" [ifElse]="autre" >
      <h2> Vous êtes majeur(e) donc le if fonctionne !</h2>      
    </ng-template>

    
    <ng-template #autre>
      <h2>Vous êtes mineur(e) donc le else fonctionne</h2>
    </ng-template>

    <h2 *if="age >= 18; else autre"> Vous êtes majeur(e) et le if avec étoile fonctionne</h2>
    <hr><br>


    <div *if="age >= 18; else other">
      <h2>Vous êtes majeur(e) !!</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
         repudiandae culpa distinctio sunt sit consequatur cumque, harum consequuntur, minus ipsum asperiores placeat eos. 
         Quae, ea.</p>
         <button>Accéder au site</button>
    </div>

    <div *ngIf="age >= 18; else other">
      <h2>Vous êtes majeur(e) !!</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
         repudiandae culpa distinctio sunt sit consequatur cumque, harum consequuntur, minus ipsum asperiores placeat eos. 
         Quae, ea.</p>
         <button>Accéder au site</button>
    </div>

    <ng-template #other>
      <h2>Vous êtes mineur(e) !!</h2>
      <p>Veuillez sortir du site !</p>
    </ng-template>
    

    <input type="number" placeholder="votre age" #ageInput>
    <button (click)="age = ageInput.valueAsNumber">Modifier l'age</button>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  age = 35;

  pages = 5;

  personnes = [
    {prenom: 'Kassim', nom: 'Pignatel'},
    {prenom: 'Malika', nom: 'M Saidie'},
    {prenom: 'Lior', nom: 'Chamla'}
  ]
    addPersonne() {
      this.personnes.push({
        prenom: 'Didier',
        nom: 'Drogba',
      });
    }
  

}
