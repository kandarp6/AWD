import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pr5',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pr5.html',
  styleUrls: ['./pr5.css']
})
export class Pr5Component {

  user = {
    email: '',
    username: '',
    password: ''
  };

  onSubmit() {
    alert("Form Submitted Successfully!");
  }
}
