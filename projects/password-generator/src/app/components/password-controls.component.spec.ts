import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PasswordControlsComponent } from "./password-controls.component";

@Component({
    selector: 'test',
    template: `
        <password-controls (generate)="onGenerate()"></password-controls>
    `,
})
class TestComponent {
    
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
});