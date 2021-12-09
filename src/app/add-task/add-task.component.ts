import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  constructor(public taskService: TaskService) {}

  ngOnInit(): void {}

  public addTask(name: HTMLInputElement, kind: HTMLInputElement) {
    this.taskService.addTask(name.value, +kind.value);
    name.value = '';
    kind.value = '0';
  }
}
