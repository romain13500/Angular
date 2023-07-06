import { Component} from "@angular/core";
import { TaxesService } from "../services/taxes.service";

@Component({
    selector: 'declaration-impots',
    template: `
        <h2>Déclaration de vos impots :</h2>
        <input #revenu type="number" placeholder="Déclarez vos revenus">
        <button (click)="onClickDeclaration(revenu.valueAsNumber)">Déclarer</button>
        <article>Vos impots : {{resultats}} €</article>
    `,
    providers: [
        // {
        //     provide: TaxesService,
        //     useFactory: () => {
        //         return new TaxesService();
        //     }
        // }
        // TaxesService,
    ]
})
export class DeclarationComponent {
    resultats: number = 0;

    constructor(private service: TaxesService) {}

    onClickDeclaration(revenu: number) {
        // const service = new TaxesService();
        this.resultats = this.service.calculate(revenu);
    }
}