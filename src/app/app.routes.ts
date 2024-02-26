import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ViewAllBooksComponent } from './pages/view-all-books/view-all-books.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BorrowersComponent } from './pages/borrowers/borrowers.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'viewAllBooks',
    component: ViewAllBooksComponent,
  },
  {
    path:'signUp',
    component:SignupComponent
  },
  {
    path:'borrowers',
    component:BorrowersComponent
  }
];
