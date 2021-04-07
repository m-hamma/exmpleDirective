import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {AuthGuardService} from './auth.guard.service';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'users',
  canActivate:[AuthGuardService],
  canActivateChild:[AuthGuardService],
  component:UsersComponent,children:[
  {path:':id/:name',component:UserComponent}]},
  {path:'**', component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
