import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/common-components/components/header/header.component';
import { BodyComponent } from './modules/common-components/components/body/body.component';
import { FooterComponent } from './modules/common-components/components/footer/footer.component';
import { SideNavComponent } from './modules/common-components/components/side-nav/side-nav.component';
import { LoginComponent } from './outer_components/login/login.component';
import { ForgotPasswordComponent } from './outer_components/forgot-password/forgot-password.component';
import { SignUpComponent } from './outer_components/sign-up/sign-up.component';
import { NotFoundComponent } from './outer_components/not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    SignUpComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
