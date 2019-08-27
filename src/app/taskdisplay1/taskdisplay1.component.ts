import { Component, OnInit } from '@angular/core';
import { Task } from '../taskdisplay/task';
import { TaskdataService } from '../taskdisplay/taskdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taskdisplay1',
  templateUrl: './taskdisplay1.component.html',
  styleUrls: ['./taskdisplay1.component.css']
})
export class Taskdisplay1Component implements OnInit {
  arr:Task[]=[];

  constructor(private _data:TaskdataService,private _router:Router) { }

  ngOnInit() {
    this._data.getAllTasks().subscribe(
      (data:Task[])=>{
        this.arr=data;
      }
    );
  }
}
