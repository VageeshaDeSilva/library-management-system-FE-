import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-all-books',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './view-all-books.component.html',
  styleUrl: './view-all-books.component.css',
})
export class ViewAllBooksComponent implements OnInit {
  private http;
  public bookList: any = {};
  public book: any;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }

  ngOnInit(): void {
    this.loadBooks();
  }

  setBook(nowbook: any) {
    this.book = nowbook;
  }

  loadBooks() {
    this.http.get('http://localhost:8080/book/getAll').subscribe((data) => {
      this.bookList = data;
    });
  }

  removeBtnOnClick() {
    this.http
      .delete(`http://localhost:8080/book/deleteBook/${this.book.id}`, {
        responseType: 'text',
      })
      .subscribe((data: string) => {
        this.loadBooks();
        // (Successfully deleted) alert box
        Swal.fire({
          title: 'Successfully deleted!',
          text: `you deleted "${this.book.name}" book right now! `,
          icon: 'success',
        });
        this.book = null;
      });
  }

  editBtnOnClick() {
    this.http
      .post('http://localhost:8080/book/addBook', this.book)
      .subscribe((data) => {
        this.loadBooks();
        // (Successfully updated) alert box
        Swal.fire({
          title: 'Successfully updated!',
          text: `you updated "${this.book.name}" book right now! `,
          icon: 'success',
        });
        this.book = null;
      });
  }
}
