import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../models/task-model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
    this.tasks = taskService.getTasks();
  }
  
  loadTasks() {
    this.tasks = this.taskService.getTasks();
  }

  confirmDeleteTask(taskId: number) {
    const confirmDelete = window.confirm('¿Estás seguro de que quieres eliminar esta tarea?');

    if (confirmDelete) {
      this.deleteTask(taskId); // Si se confirma la eliminación, llama a la función para eliminar la tarea
    }
  }

  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId);
  }

  markAsCompleted(taskId: number): void {
    this.taskService.markAsCompleted(taskId);
  }

  ngOnInit(): void {
  }

}
