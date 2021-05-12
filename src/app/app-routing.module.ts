import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { DeleteaccountComponent } from './deleteaccount/deleteaccount.component';
import { ConfirmDeleteaccountComponent } from './confirm-deleteaccount/confirm-deleteaccount.component';
import { DefinitiveDeleteaccountComponent } from './definitive-deleteaccount/definitive-deleteaccount.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'accounts',
    component:AccountsComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'createaccount',
    component:CreateaccountComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'deleteaccount',
    component:DeleteaccountComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'confirm-deleteaccount',
    component:ConfirmDeleteaccountComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'definitive-deleteaccount',
    component:DefinitiveDeleteaccountComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
