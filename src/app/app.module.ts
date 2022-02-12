import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ReviewComponent } from './review/review.component';
import { AppRoutingModule } from './app-routing-module';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PriceComponent } from './price/price.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ReviewComponent,
    PortfolioComponent,
    PriceComponent,
    
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
   
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
