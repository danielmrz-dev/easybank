import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { MainComponent } from './main/main.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { NextGenComponent } from './main/next-gen/next-gen.component';
import { ButtonComponent } from './button/button.component';
import { WhyEasebankComponent } from './main/why-easebank/why-easebank.component';
import { BenefitsComponent } from './main/why-easebank/benefits/benefits.component';
import { ArticlesComponent } from './main/articles/articles.component';
import { ArticleComponent } from './main/articles/article/article.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    MainComponent,
    NextGenComponent,
    ButtonComponent,
    WhyEasebankComponent,
    BenefitsComponent,
    ArticlesComponent,
    ArticleComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
