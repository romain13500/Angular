import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PasswordControlsComponent } from './components/password-controls.component';
import { PasswordDisplayComponent } from './components/password-display.component';
import { PasswordSettingsComponent } from './components/password-settings.component';
import { PasswordGeneratorService } from './password-generator.service';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  
  beforeEach(async()=> {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PasswordDisplayComponent,
        PasswordControlsComponent,
        PasswordSettingsComponent
      ],
      providers: [PasswordGeneratorService],
      imports: [FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.autoDetectChanges();
  })


  it('should work',async () => {
    const article = fixture.nativeElement.querySelector('article');
    expect(article.textContent).toBe('Cliquez sur le bouton "Générer"');
  });


  it('should change message when user click button', async()=> {
    const service = TestBed.inject(PasswordGeneratorService);
    const spy = spyOn(service, "generate");

    spy.and.returnValue("MOCK_PASSWORD");

    const button = fixture.nativeElement.querySelector('button');
    button.click();

    const article = fixture.nativeElement.querySelector('article');
    expect(article.textContent).toBe('MOCK_PASSWORD');
  })

  it('test checkbox', async()=> {
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

  })


});

