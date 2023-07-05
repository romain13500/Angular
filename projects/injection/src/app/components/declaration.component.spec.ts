import { TestBed } from "@angular/core/testing"
import { DeclarationComponent } from "./declaration.component"

describe("DeclarationComponent", () => {
    it("Afficher le résultat des taxes", async() => {
        await TestBed.configureTestingModule({
            declarations: [DeclarationComponent]
        }).compileComponents()

        const fixture = TestBed.createComponent(DeclarationComponent);
        fixture.autoDetectChanges();

        //  QUAND JE RENTRE LE MONTANT DANS L'INPUT
        const input = fixture.nativeElement.querySelector('input');
        input.value = "1000";

        // SI JE CLIQUE SUR LE BOUTON
        fixture.nativeElement.querySelector('button').click();

        // ALORS JE DEVRAIS VOIR LE RESULTAT DANS <ARTICLE>
        expect(
            fixture.nativeElement.querySelector('article').textContent).toContain('1500');
    })
})