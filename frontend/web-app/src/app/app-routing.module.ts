import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SemesterComponent } from './components/semester/semester.component';
import { RegisterComponent } from './components/register/register.component';
import { AddSemesterComponent } from './components/semester/add-semester/add-semester.component';
import { ListSemesterComponent } from './components/semester/list-semester/list-semester.component';
import { DegreeComponent } from './components/degree/degree.component';
import { SubjectComponent } from './components/subject/subject.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LayoutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'semester', component: SemesterComponent },
  { path: 'addSemester', component: AddSemesterComponent },
  { path: 'listSemester', component: ListSemesterComponent },
  { path: 'degrees', component: DegreeComponent },
  { path: 'subjects', component: SubjectComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
