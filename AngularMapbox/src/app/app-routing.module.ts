import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { MapModule } from './modules/map/map.module';
import { ForgotPasswordComponent } from './outer_components/forgot-password/forgot-password.component';
import { LoginComponent } from './outer_components/login/login.component';
import { NotFoundComponent } from './outer_components/not-found/not-found.component';

const routes: Routes = [
  {path:"" , pathMatch:"full",redirectTo:"/login" },
  {path:"login" , component:LoginComponent },
  {path:"forgot-password" , component:ForgotPasswordComponent },

  {path:"map",
    canActivate:[AuthGuard],
    loadChildren: () =>
    import("./modules/map/map.module").then((m)=>MapModule)
  },

  {path:"**" , component:NotFoundComponent }


  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
