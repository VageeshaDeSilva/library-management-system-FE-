import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { ViewAllBooksComponent } from './pages/view-all-books/view-all-books.component';
import { SearchBookComponent } from './pages/search-book/search-book.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavBarComponent,ViewAllBooksComponent,SearchBookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lms-front-end';
}
