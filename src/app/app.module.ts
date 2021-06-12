import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { DeleteaccountComponent } from './deleteaccount/deleteaccount.component';
import { ConfirmDeleteaccountComponent } from './confirm-deleteaccount/confirm-deleteaccount.component';
import { DefinitiveDeleteaccountComponent } from './definitive-deleteaccount/definitive-deleteaccount.component';
import { InfoaccountComponent } from './infoaccount/infoaccount.component';
import { AddbalanceComponent } from './addbalance/addbalance.component';
import { RemovebalanceComponent } from './removebalance/removebalance.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AccountsComponent,
    CreateaccountComponent,
    DeleteaccountComponent,
    ConfirmDeleteaccountComponent,
    DefinitiveDeleteaccountComponent,
    InfoaccountComponent,
    AddbalanceComponent,
    RemovebalanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
