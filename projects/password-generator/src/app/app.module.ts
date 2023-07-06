import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PasswordDisplayComponent } from './components/password-display.component';
import { PasswordControlsComponent } from './components/password-controls.component';
import { PasswordSettingsComponent } from './components/password-settings.component';
import { PasswordGeneratorService } from './password-generator.service';

@NgModule({
  declarations: [
    AppComponent,
    PasswordDisplayComponent,
    PasswordControlsComponent,
    PasswordSettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PasswordGeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
