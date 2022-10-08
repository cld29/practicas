import { Component, OnInit } from '@angular/core';
import { TASKS } from '../../mock-task';
import { task } from '../../tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
tasks: task[]=TASKS;

  constructor() { }

  ngOnInit(): void {
  }

}
