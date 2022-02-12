import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { EditdeleteComponent } from './editdelete/editdelete.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PriceComponent } from './price/price.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {
    path: '' , pathMatch: "full",
    redirectTo: "about"
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'review', component: ReviewComponent
  },
  {
    path: 'portfolio', component: PortfolioComponent
  },
  {
    path: 'price', component: PriceComponent
  },
  {
    path: 'editdelete:id', component: EditdeleteComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
