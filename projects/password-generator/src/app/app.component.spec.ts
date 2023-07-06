import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PasswordControlsComponent } from './password-generator/password-controls.component';
import { PasswordDisplayComponent } from './password-generator/password-display.component';
import { PasswordSettingsComponent } from './password-generator/password-settings.component';
import { PasswordGeneratorService } from './password-generator/password-generator.service';
import { PasswordGeneratorModule } from './password-generator/password-generator.module';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [PasswordGeneratorModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.autoDetectChanges();
  });

  it('should work', async () => {
    const article = fixture.nativeElement.querySelector('article');
    expect(article.textContent).toBe('Cliquez sur le bouton "Générer"');
  });

  it('should change message when user click button', async () => {
    const service = TestBed.inject(PasswordGeneratorService);
    const spy = spyOn(service, 'generate');

    spy.and.returnValue('MOCK_PASSWORD');

    const button = fixture.nativeElement.querySelector('button');
    button.click();

    const article = fixture.nativeElement.querySelector('article');
    expect(article.textContent).toBe('MOCK_PASSWORD');
  });

  it('test checkbox', async () => {
    fixture.nativeElement.querySelector('#uppercase').click();
    expect(fixture.componentInstance.settings.uppercase).toBeTrue();

    fixture.nativeElement.querySelector('#numbers').click();
    expect(fixture.componentInstance.settings.numbers).toBeTrue();

    fixture.nativeElement.querySelector('#symbols').click();
    expect(fixture.componentInstance.settings.symbols).toBeTrue();

    const length = fixture.nativeElement.querySelector('#length');
    length.value = 30;
    length.dispatchEvent(new Event('input'));

    expect(fixture.componentInstance.settings.length).toBe(30);
  });

  it("devrait afficher un bouton de copie lorsque le mot de passe est généré", () => {
    const service = TestBed.inject(PasswordGeneratorService);
    const spy = spyOn(service, "generate");
    spy.and.returnValue("MOCK_PASSWORD");

    fixture.nativeElement.querySelector('#generate').click();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('#copy')).not.toBeNull();
  })
});
