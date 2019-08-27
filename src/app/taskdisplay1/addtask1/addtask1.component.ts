import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { UserdataService } from 'src/app/userdisplay/userdata.service';
import { Task } from 'src/app/taskdisplay/task';
import { TaskdataService } from 'src/app/taskdisplay/taskdata.service';

@Component({
  selector: 'app-addtask1',
  templateUrl: './addtask1.component.html',
  styleUrls: ['./addtask1.component.css']
})
export class Addtask1Component implements OnInit {
  addtask1:FormGroup;
  constructor(private fb:FormBuilder,private _data:TaskdataService) { }

  ngOnInit() {
    this.addtask1=this.fb.group({
      Id:new FormControl(null),
      Title:new FormControl(null),
      Status:new FormControl(null)

    });
  }
  onTaskSave(){
    this._data.addTask(

      new Task(
        this.addtask1.value.Id,
        this.addtask1.value.Title,
        this.addtask1.value.Status
      )
    )
    .subscribe((x:any)=>{
      alert("record added");

    });
  }

}
