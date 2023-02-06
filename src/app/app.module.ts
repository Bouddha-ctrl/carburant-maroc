import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { PricesComponent } from './prices/prices.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';
import { InfoComponent } from './info/info.component';
import { environment } from '../environments/environment';
import { AngularFireFunctionsModule } from '@angular/fire/compat/functions';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    PricesComponent,
    NavbarComponent,
    FormComponent,
    InfoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule,AngularFireModule.initializeApp(environment.firebase),
    AngularFireFunctionsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
