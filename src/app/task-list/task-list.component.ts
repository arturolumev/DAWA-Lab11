import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: { id: number, title: string, completed: boolean }[] = [];

  updateTaskStatus(task: { id: number, title: string, completed: boolean }): void {
    console.log(`Task ${task.id} - Title: ${task.title} - Completed: ${task.completed}`);
  }
}
