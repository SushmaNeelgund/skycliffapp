import { Component, OnInit } from '@angular/core';
import { User } from '../userdisplay/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component implements OnInit {
  arr:User[]=[];
  userdata:any;
  errormessage:string;

  constructor(private _actroute:ActivatedRoute) {
    this.userdata=this._actroute.snapshot.data["udata"];
    console.log(this.userdata);

  }

  ngOnInit() {
    this.arr=this.userdata.data;
    console.log(this.arr);
    this.errormessage=this.userdata.errmsg;
    }

}
