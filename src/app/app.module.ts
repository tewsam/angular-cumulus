import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SamCompComponent } from './sam-comp/sam-comp.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Tewservice1Component } from './tewservice1/tewservice1.component';
import { Tewservice2Component } from './tewservice2/tewservice2.component';

@NgModule({
  declarations: [
    AppComponent,
    SamCompComponent,
    ParentComponent,
    ChildComponent,
    Tewservice1Component,
  Tewservice2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
