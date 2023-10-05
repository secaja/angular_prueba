import { Injectable } from '@angular/core';
import { Task } from './models/task-model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private lastId = 0;

  tasksUpdated = new Subject<Task[]>();

  constructor() {}

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task){
    task.id = ++this.lastId;
    this.tasks.push(task);
  }

  deleteTask(taskId: number) {
    // Lógica para eliminar la tarea de this.tasks
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
      this.tasksUpdated.next([...this.tasks]);
    }
  }

  markAsCompleted(taskId: number): void {
    const task = this.tasks.find((t) => t.id === taskId);
    if (task) {
      task.completed = true;
    }
  }
}
