import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'password-controls',
  template: `
    <button id="generate" (click)="onClickGenerate()">Générer</button>
    <button id="copy" (click)="onClickCopy()" *ngIf="password">Copiez le mot de passe</button>
  `,
  styles: [
  ]
})
export class PasswordControlsComponent {
  @Output('generate')
  onGenerateEvent = new EventEmitter()
  
  @Input()
  password?: string;

  onClickCopy() {
    if (!this.password) {
      return;
    }
    navigator.clipboard.writeText(this.password);
  }

  onClickGenerate() {
    this.onGenerateEvent.emit();
  }
}
