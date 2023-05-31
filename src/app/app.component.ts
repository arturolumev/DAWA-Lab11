import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: { id: number, title: string, completed: boolean }[] = [];
  filteredTasks: { id: number, title: string, completed: boolean }[] = [];

  addTask(taskTitle: string) {
    const newTask = {
      id: this.tasks.length + 1,
      title: taskTitle,
      completed: false
    };
    this.tasks.push(newTask);
    this.updateFilteredTasks();
  }
  onFilterChange(filter: string) {
    this.updateFilteredTasks(filter);
  }

  updateFilteredTasks(filter?: string) {
    if (filter === 'completed') {
      this.filteredTasks = this.tasks.filter(task => task.completed);
    } else if (filter === 'incomplete') {
      this.filteredTasks = this.tasks.filter(task => !task.completed);
    } else {
      this.filteredTasks = this.tasks;
    }
  }
}
