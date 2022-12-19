import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleItemComponent } from './articles/article-item/article-item.component';
import { ArticleDetailsComponent } from './articles/article-details/article-details.component';
import { ConnexionComponent } from './authentification/connexion/connexion.component';
import { InscriptionComponent } from './authentification/inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BackOfficeComponentComponent } from './back-office-component/back-office-component.component';
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module

@NgModule({
  declarations: [
    AppComponent,
    ArticleItemComponent,
    ArticleDetailsComponent,
    ConnexionComponent,
    InscriptionComponent,
    LoginComponent,
    LoginFormComponent,
    BackOfficeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
