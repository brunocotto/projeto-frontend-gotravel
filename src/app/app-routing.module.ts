import { TravelDeleteComponent } from './components/travel/travel-delete/travel-delete.component';
import { TravelUpdateComponent } from './componenets/travel/travel-update/travel-update.component';
import { TravelHomeComponent } from './components/travel-home/travel-home.component';
import { RegisterComponent } from './account/register/register.component';
import { AuthGuard } from './account/shared/auth.guard';
import { LoginComponent } from './account/login/login.component';
import { AuthenticationComponent } from './views/authentication/authentication.component';
import { TravelCrudComponent } from './views/travel-crud/travel-crud.component';
import { TravelCreateComponent } from './components/travel/travel-create/travel-create.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: "",
  component: HomeComponent,
  children: [{
    path: "home",
    component: TravelHomeComponent
  },{
    path: "travel",
    component: TravelCrudComponent
  },{
    path: "travel/create",
    component: TravelCreateComponent
  },{
    path: "travel/update/:_id",
    component: TravelUpdateComponent
  },{
    path: "travel/delete/:_id",
    component: TravelDeleteComponent
  }],
  canActivate: [AuthGuard]
},{
  path: '',
  component: AuthenticationComponent,
  children: [
      { path: '', redirectTo: 'auth/authenticate', pathMatch: 'full'},
      { path: 'auth/authenticate', component: LoginComponent },
      { path: 'auth/register', component: RegisterComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
