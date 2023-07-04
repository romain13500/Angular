import { Component, createComponent } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { PasswordDisplayComponent } from "./password-display.component";

@Component({
    selector: 'test',
    template: `
        <password-display password="MOCK_PASSWORD"></password-display>
    `,
})
class TestComponent {
   
}

@Component({
    selector: 'test',
    template: `
        <password-display></password-display>
    `,
})
class TestDefaultComponent {}

describe("PasswordDisplayComponent", () => {
    it("afficher le message de l'input", () => {
        TestBed.configureTestingModule({
            declarations: [PasswordDisplayComponent, TestComponent]
        });

        const fixture = TestBed.createComponent(TestComponent);
        fixture.autoDetectChanges();


        const article = fixture.nativeElement.querySelector('article');

        expect(article.textContent).toContain('MOCK_PASSWORD');
    })

    it("should display a phrase when no password is given", () => {
        TestBed.configureTestingModule({
            declarations: [PasswordDisplayComponent, TestDefaultComponent]
        });

        const fixture = TestBed.createComponent(TestDefaultComponent);
        fixture.autoDetectChanges();

        const article = fixture.nativeElement.querySelector('article');

        expect(article.textContent).toContain('Cliquez sur le bouton "Générer"')
    })
})