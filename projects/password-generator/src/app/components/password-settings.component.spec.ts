import { Component } from "@angular/core"
import { TestBed } from "@angular/core/testing"
import { FormsModule } from "@angular/forms"
import { Settings } from "../types"
import { PasswordSettingsComponent } from "./password-settings.component"

@Component({
    selector: 'test',
    template: `
        <password-settings (settings-change)="onChange($event)"></password-settings>
    `,
})
class TestDefaultComponent {
    onChange(settings: Settings) {}
}

@Component({
    selector: 'test',
    template: `
        <password-settings [default-settings]="{
            length:30,
            uppercase: true,
            numbers: true,
            symbols: true,
        }"></password-settings>
    `,
})
class TestInputComponent {}

describe("PasswordSettingsComponent", () => {

    it('should represents settings in the HTML tags', async () => {
        await TestBed.configureTestingModule({
            declarations: [TestDefaultComponent, PasswordSettingsComponent],
            imports: [FormsModule]
        }).compileComponents()

        const fixture = TestBed.createComponent(TestDefaultComponent);
        fixture.autoDetectChanges();

        await fixture.whenStable();

        const lengthInput = fixture.nativeElement.querySelector('#length');
        const uppercaseInput = fixture.nativeElement.querySelector('#uppercase');
        const numbersInput = fixture.nativeElement.querySelector('#numbers');
        const symbolsInput = fixture.nativeElement.querySelector('#symbols');

        expect(lengthInput.value).toBe("20");
        expect(uppercaseInput.checked).toBeFalse();
        expect(numbersInput.checked).toBeFalse();
        expect(symbolsInput.checked).toBeFalse();
    })

    it('should accept initial settings from the outside', async() => {
        await TestBed.configureTestingModule({
            declarations: [PasswordSettingsComponent, TestInputComponent ],
            imports: [FormsModule]
        }).compileComponents()

        const fixture = TestBed.createComponent(TestInputComponent);
        fixture.detectChanges();

        await fixture.whenStable();

        const lengthInput = fixture.nativeElement.querySelector('#length');
        const uppercaseInput = fixture.nativeElement.querySelector('#uppercase');
        const numbersInput = fixture.nativeElement.querySelector('#numbers');
        const symbolsInput = fixture.nativeElement.querySelector('#symbols');

        expect(lengthInput.value).toBe("30");
        expect(uppercaseInput.checked).toBeTrue();
        expect(numbersInput.checked).toBeTrue();
        expect(symbolsInput.checked).toBeTrue();
    })

    it('should emit an event with settings each time user changes HTML inputs', async() => {
        await TestBed.configureTestingModule({
            declarations: [PasswordSettingsComponent, TestDefaultComponent],
            imports: [FormsModule]
        }).compileComponents();

        const fixture = TestBed.createComponent(TestDefaultComponent);
        fixture.autoDetectChanges(true);
        const component = fixture.componentInstance;

        const spy = spyOn(component, "onChange");


        const verifyCheckbox = (id: 'uppercase' | 'numbers' |'symbols', expectedValue: Settings) => {
             fixture.nativeElement.querySelector('#' + id).click();

            expect(spy).toHaveBeenCalledWith(expectedValue);
        }
        

        verifyCheckbox('numbers', {
            length: 20,
            uppercase: false,
            numbers: true,
            symbols: false
        })

        verifyCheckbox('uppercase', {
            length: 20,
            uppercase: true,
            numbers: true,
            symbols: false
        })

        verifyCheckbox('symbols', {
            length: 20,
            uppercase: true,
            numbers: true,
            symbols: true
        })

        const lengthInput =fixture.nativeElement.querySelector('#length');
        lengthInput.value = '33';
        lengthInput.dispatchEvent(new Event('input'));

        expect(spy).toHaveBeenCalledWith({
            length: 33,
            uppercase: true,
            numbers: true,
            symbols: true
        });
    })
})