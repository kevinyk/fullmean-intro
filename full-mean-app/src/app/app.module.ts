import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HttpService } from './http.service';

import { AppComponent } from './app.component';
import { BadTwitterQuotesComponent } from './bad-twitter-quotes/bad-twitter-quotes.component';

@NgModule({
  declarations: [
    AppComponent,
    BadTwitterQuotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
