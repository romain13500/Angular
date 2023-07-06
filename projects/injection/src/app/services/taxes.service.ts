import { Inject, Injectable, InjectionToken } from "@angular/core";

export const TAUX_TVA = new InjectionToken("Le taux de TVA")

@Injectable()
export class TaxesService {
    total = 0;

    
    constructor(@Inject(TAUX_TVA) private tauxDeTVA: number) {
        console.log('Je suis le service N°', Math.random())
    }

    calculate(revenu: number) {
        // ligne de code contenant les different calcul
        console.log('5 appels HTTP');
        this.total += revenu;
        return revenu + 500;
    }
    
}