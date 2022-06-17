import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ContentComponent } from './components/content/content.component';
import { WhyComponent } from './components/why/why.component';
import { KeyFeaturesComponent } from './components/key-features/key-features.component';
import { ReportComponent } from './components/report/report.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { FaqComponent } from './components/faq/faq.component';
import { NeedComponent } from './components/need/need.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent,
    WhyComponent,
    KeyFeaturesComponent,
    ReportComponent,
    HowItWorksComponent,
    FaqComponent,
    NeedComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
