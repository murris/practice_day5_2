import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTreeComponent } from './app-tree/app-tree.component';
import { FirstChildComponentComponent } from './app-tree/first-child-component.component';
import { SecondChildComponentComponent } from './app-tree/second-child-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTreeComponent,
    FirstChildComponentComponent,
    SecondChildComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
