import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  
  beforeEach(async()=> {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.autoDetectChanges();
  })


  it('should work',async () => {
    const article = fixture.nativeElement.querySelector('article');
    expect(article.textContent).toBe('Cliquez sur le bouton "Générer"');
  });


  it('should change message when user click button', async()=> {
    const button = fixture.nativeElement.querySelector('button');
    button.click();

    const article = fixture.nativeElement.querySelector('article');
    expect(article.textContent).toBe('Mon_password');
  })

  it('test checkbox', async()=> {
    fixture.nativeElement.querySelector('#uppercase').click();
    expect(fixture.componentInstance.uppercase).toBeTrue();

    fixture.nativeElement.querySelector('#numbers').click();
    expect(fixture.componentInstance.numbers).toBeTrue();

    fixture.nativeElement.querySelector('#symbols').click();
    expect(fixture.componentInstance.symbols).toBeTrue();

    const length = fixture.nativeElement.querySelector('#length');
    length.value = 30;
    length.dispatchEvent(new Event('input'));

    expect(fixture.componentInstance.length).toBe(30);

  })


});

