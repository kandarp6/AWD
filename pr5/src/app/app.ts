import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {

  customers: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>("http://localhost/experiment5/Customers.php")
      .subscribe({
        next: (response) => {
          this.customers = response.records;
        },
        error: (error) => {
          console.error("Error fetching data", error);
        }
      });
  }
}
