import { Component } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { PasswordDisplayComponent } from "./password-display.component";

@Component({
    selector: 'test',
    template: `
        <password-display message="MOCK_MESSAGE"></password-display>
    `,
})
class TestComponent {
   
}

describe("PasswordDisplayComponent", () => {
    it("afficher le message de l'input", () => {
        TestBed.configureTestingModule({
            declarations: [PasswordDisplayComponent, TestComponent]
        });

        const fixture = TestBed.createComponent(TestComponent);
        fixture.autoDetectChanges();


        const article = fixture.nativeElement.querySelector('article');

        expect(article.textContent).toContain('MOCK_MESSAGE');
    })
})