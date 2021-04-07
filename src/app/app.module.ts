import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorDirective } from './color.directive';
import { HomepageComponent } from './homepage/homepage.component';
import { UsersComponent } from './users/users.component';
import { IfDirective } from './if.directive';
import { UserComponent } from './user/user.component';
import { AddElementComponent } from './add-element/add-element.component';
import { ListElementComponent } from './list-element/list-element.component';
import {AlimentService} from  './aliment.service';
import { NotFoundComponent } from './not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    ColorDirective,
    HomepageComponent,
    UsersComponent,
    IfDirective,
    UserComponent,
    AddElementComponent,
    ListElementComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
  ],
  providers: [AlimentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
