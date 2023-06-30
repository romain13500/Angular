import { Component, ElementRef, Input, ViewChild } from "@angular/core";

@Component({
    selector: 'user-profile',
    template: `
        <h3 [class.hired] ="isHired"> {{ firstName }} {{ lastName | uppercase}}</h3>
        <img [src]="avatar" alt="img">
        Métier : {{ job }} ( {{ revenue | currency: 'EUR': 'symbol' }} / mois )
        <button (click)="onClickButton()">Embaucher</button>
        <button (click)="dismissal()">Licencier</button>
        <input #prenom type="text" placeholder="Nouveau Prenom"/>
        <button (click)="changePrenom()">Changer le prenom</button>
        
    `,
    styles: [`
        .hired {
            background-color:green;
        }
        h3 {
            color: blue;
        }
    `]
})

export class UserProfileComponent {
    @ViewChild('prenom')
    prenom?: ElementRef<HTMLInputElement>;

    @Input('first-name')
    firstName = '';
    @Input('last-name')
    lastName = '';
    @Input('job')
    job= '';
    @Input('hired')
    isHired = false;

    onFrappeClavier(event: Event) {
        this.firstName = (event.target as HTMLInputElement).value;
    }

    onClickButton() {
        this.isHired = true;
    }

    changePrenom(){
        if (!this.prenom) {
            return;
        }
        this.firstName = this.prenom?.nativeElement.value ;
    }

    dismissal() {
       this.isHired = false;
    }

    avatar = 'https://via.placeholder.com/30'

    revenue = 1400;

    constructor(private elementRef: ElementRef<HTMLElement>) {}

    ngOnInit() {}

    ngAfterViewInit(){
        if (this.prenom) {
            this.prenom.nativeElement.value = '';  
          }
    }
}