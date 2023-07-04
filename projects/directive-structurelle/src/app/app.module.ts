import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IfDirective } from './directive-structurelle/if.directive';
import { LoopDirective } from './directive-structurelle/loop-directive';
import { RepeatDirective } from './directive-structurelle/repeat.directive';

@NgModule({
  declarations: [
    AppComponent,
    IfDirective,
    LoopDirective,
    RepeatDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
