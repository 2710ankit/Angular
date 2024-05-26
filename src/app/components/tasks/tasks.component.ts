import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent implements OnInit {
  taskList: any[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get('tasks').subscribe({
      next: (res:any) => {
        console.log(res);
        this.taskList = res.data
      },
      error: (err) => {
        alert(err.error.message.message);
      },
    });
  }
}
