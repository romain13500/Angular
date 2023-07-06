export class TaxesService {
    total = 0;

    calculate(revenu: number) {
        // ligne de code contenant les different calcul
        console.log('5 appels HTTP');
        this.total += revenu;
        return revenu + 500;
    }
    
}