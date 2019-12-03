import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { ColdObservalbesComponent } from './cold-observalbes/cold-observalbes.component';
import { HotObservablesIntroComponent } from './hot-observables-intro/hot-observables-intro.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    ColdObservalbesComponent,
    HotObservablesIntroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
