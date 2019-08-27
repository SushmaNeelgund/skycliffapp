import { Component, OnInit } from '@angular/core';
import { Product } from '../productdisplay/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {
  arr:Product[]=[];
  productdata:any;
  errormessage:string;

  constructor(private _actroute:ActivatedRoute) {
    this.productdata=this._actroute.snapshot.data["pdata"];
    console.log(this.productdata);
  }

  ngOnInit() {
    this.arr=this.productdata.products;
    console.log(this.arr);
    this.errormessage=this.productdata.errormsg;
  }

}
