import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CapitalizePhilipsPipe } from './pipes/capitalize-philips.pipe';
import { Ex4Component } from './ex4/ex4.component';
import { Ex6Component } from './ex6/ex6.component';
import { Ex7Component } from './ex7/ex7.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePhilipsPipe,
    Ex4Component,
    Ex6Component,
    Ex7Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
