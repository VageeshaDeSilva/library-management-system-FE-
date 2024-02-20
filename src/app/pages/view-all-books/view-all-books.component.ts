import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
  private book: any;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }

  ngOnInit(): void {
    this.loadBooks();
  }

  nowBook(nowbook: any) {
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
        this.book = null;
      });
  }

  editBtnOnClick() {
    alert('edit');
  }
}
