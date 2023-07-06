import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PasswordControlsComponent } from "./password-controls.component";

@Component({
    selector: 'test',
    template: `
        <password-controls [password]="password" (generate)="onGenerate()"></password-controls>
    `,
})
class TestComponent {
    password?: string;
    onGenerate() {}
}

describe('PasswordControlsComponent', () => {
    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;

    beforeEach(async() => {
        await TestBed.configureTestingModule({
            declarations: [
                PasswordControlsComponent,
                TestComponent
            ]
        }).compileComponents()

        fixture = TestBed.createComponent(TestComponent);
        fixture.autoDetectChanges();
        component = fixture.componentInstance;
    });

    it("emmètre un événement quand l'utilisateur click sur le bouton", () => {
        const spy = spyOn(component, "onGenerate")
        fixture.nativeElement.querySelector('button').click();
        expect(spy).toHaveBeenCalled();
    })

    it("ne doit pas afficher le bouton", () => {
        expect(fixture.nativeElement.querySelector('#copy')).toBeNull();
    })

    it("Doit afficher le bouton 'copie si le mot de passe est généré'", () => {
        fixture.componentInstance.password = "MOCK_PASSWORD";
        fixture.autoDetectChanges();

        expect(fixture.nativeElement.querySelector('#copy')).toBeTruthy();
    })

    it('doit copier le mot de passe lorsque l\'utilisateur clique sur le bouton de copie', () => {

        const spy = spyOn(navigator.clipboard, "writeText");
       
    //    UNE FOIS LE PASSWORD GENERE

        fixture.componentInstance.password = 'MOCK_PASSWORD';
        fixture.detectChanges();

        fixture.nativeElement.querySelector('#copy').click();

        expect(spy).toHaveBeenCalledWith('MOCK_PASSWORD');

        expect(fixture.nativeElement.querySelector('#copy-message')).not.toBeNull('Le mot de passe a était copié ✅');
    })

});