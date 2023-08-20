import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgCustomPipeModule } from 'ng-custom-pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCustomPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
