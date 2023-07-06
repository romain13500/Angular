import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DeclarationComponent } from './components/declaration.component';
import { RecapComponent } from './components/recap.component';
import { TAUX_TVA, TaxesService } from './services/taxes.service';

@NgModule({
  declarations: [
    AppComponent,
    DeclarationComponent,
    RecapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TaxesService, 
    {
      provide: TAUX_TVA,
      useValue: 0.2,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
