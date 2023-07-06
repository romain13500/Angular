import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DeclarationComponent } from './components/declaration.component';
import { RecapComponent } from './components/recap.component';
import { TaxesService } from './services/taxes.service';

@NgModule({
  declarations: [
    AppComponent,
    DeclarationComponent,
    RecapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TaxesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
