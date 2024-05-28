import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  constructor(private httpClient: HttpClient, private router:Router) {}

  ngOnInit(): void {}

  loginSubmit = () => {
    if (!this.username || !this.password) {
      alert('No Username or password');
      return;
    }
    this.httpClient
      .post('auth/login', { username: this.username, password: this.password })
      .subscribe({
        next: (d) => {

          this.router.navigate(['/tasks'])
        },
        error: (e) => {
          alert(e.error.message.message);
        },
      });
  };
}
