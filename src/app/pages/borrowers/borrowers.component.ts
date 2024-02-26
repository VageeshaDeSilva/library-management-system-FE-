import { Component,OnInit } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-borrowers',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './borrowers.component.html',
  styleUrl: './borrowers.component.css'
})
export class BorrowersComponent implements OnInit{
  private http;
  public borrowerList: any = {};
  public borrower: any;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }

  ngOnInit(): void {
    this.loadBorrowers();
  }

  setBorrower(nowBorrower: any) {
    this.borrower = nowBorrower;
  }

  loadBorrowers() {
    this.http.get('http://localhost:8081/borrower/getAll').subscribe((data) => {
      this.borrowerList = data;
    });
  }

  addBorrower(){
    alert("added borrower");
  }

  removeBtnOnClick() {
    this.http
      .delete(`http://localhost:8081/borrower/delete/${this.borrower.id}`, {
        responseType: 'text',
      })
      .subscribe((data: string) => {
        this.loadBorrowers();
        // (Successfully deleted) alert box
        Swal.fire({
          title: 'Successfully deleted!',
          text: `you deleted "${this.borrower.name}" book right now! `,
          icon: 'success',
        });
        this.borrower = null;
      });
  }

  editBtnOnClick() {
    this.http
      .post('http://localhost:8081/borrower/add', this.borrower)
      .subscribe((data) => {
        this.loadBorrowers();
        // (Successfully updated) alert box
        Swal.fire({
          title: 'Successfully updated!',
          text: `you updated "${this.borrower.name}" borrower right now! `,
          icon: 'success',
        });
        this.borrower = null;
      });
  }
}
