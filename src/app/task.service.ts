import { Injectable } from '@angular/core';
import { Task as AppTask } from './task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: AppTask[] = [];

  constructor() {
    if (localStorage.tasks) {
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  }

  public getTasks(): AppTask[] {
    return this.tasks;
  }

  private transformKind(index: number): string {
    switch (index) {
      default:
        return 'Rutinis';
      case 1:
        return 'Neskubus';
      case 2:
        return 'Skubus';
      case 3:
        return 'Ypač skubus';
    }
  }

  public addTask(name: string, kind: number): void {
    this.tasks.push({ name, kind: this.transformKind(kind) });
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  public removeTask(index: number): void {
    this.tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
