import { TestBed } from "@angular/core/testing"
import { TaxesService } from "../services/taxes.service"
import { DeclarationComponent } from "./declaration.component"

class FakeService {
    calculate(revenu:number) {
        return revenu + 500
    }
}

describe("DeclarationComponent", () => {
    it("Afficher le résultat des taxes", async() => {
        await TestBed.configureTestingModule({
            declarations: [DeclarationComponent]
        }).compileComponents()

        TestBed.overrideComponent(DeclarationComponent, {
            set: {
                providers: [
                    // {
                    //     provide: TaxesService,
                    //     useFactory: () => {
                    //         return new FakeService();
                    //     }
                    // }
                    {
                        provide: TaxesService,
                        useClass: FakeService,
                    }
                ]
            }
        })

        const fixture = TestBed.createComponent(DeclarationComponent);
        fixture.autoDetectChanges(true);

        // const service = fixture.debugElement.injector.get(TaxesService);

        // const spy = spyOn(service, "calculate");
        // spy.and.callFake((revenu: number) => {
        //     return revenu + 500;
        // })

        

        //  QUAND JE RENTRE LE MONTANT DANS L'INPUT
        const input = fixture.nativeElement.querySelector('input');
        input.value = "2000";

        // SI JE CLIQUE SUR LE BOUTON
        fixture.nativeElement.querySelector('button').click();

        // ALORS JE DEVRAIS VOIR LE RESULTAT DANS <ARTICLE>
        expect(
            fixture.nativeElement.querySelector('article').textContent).toContain('2500');
    })
})