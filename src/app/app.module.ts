import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentCrudComponent } from './student-crud/student-crud.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';

const appRutes:Routes = [
  {path:'',component:StudentCrudComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    StudentCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
