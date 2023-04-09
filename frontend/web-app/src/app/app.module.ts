import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AngularMaterialModule } from './shrared/angular-material.module';
import { FormsModule } from '@angular/forms';
import { SemesterComponent } from './components/semester/semester.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    SemesterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule, 
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
