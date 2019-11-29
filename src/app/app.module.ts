import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { ColdObservalbesComponent } from './cold-observalbes/cold-observalbes.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    ColdObservalbesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
