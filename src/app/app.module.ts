import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes , RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { QuoteItemComponent } from './quote-item/quote-item.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyAboutComponent } from './my-about/my-about.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import { CounterComponent } from './counter/counter.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { MySecondCounterComponent } from './my-second-counter/my-second-counter.component';
import { CounterService } from './my-services/counter.service';

//ROOTS:
const routes: Routes = [

  { path: 'quotes', component: QuoteListComponent },//http://localhost:4200/quotes
  { path: 'home', component: MyHomeComponent },//http://localhost:4200/home
  { path: 'about', component: MyAboutComponent },
  { path: 'contacts', component: ContactListComponent },
  { path: 'contact/:id', component: ContactComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    QuoteItemComponent,
    QuoteListComponent,
    MyHomeComponent,
    MyAboutComponent,
    ContactListComponent,
    ContactComponent,
    CounterComponent,
    MyCounterComponent,
    MySecondCounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)//Need this for roots to work
  ],
  providers: [ CounterService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
