import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task-model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  newTask: Task = {id:0, title:'', description: '', completed:false};

  constructor(private taskService:TaskService) { }

  addTask(){
    if(this.newTask.title.trim()){
      this.taskService.addTask(this.newTask);
      this.newTask={id:0 , title:'', description:'', completed: false
      }
    }
  }
  
  ngOnInit(): void {
  }

}