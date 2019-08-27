import { Routes,RouterModule } from "@angular/router";


import { CustomerComponent } from './customer/customer.component';
// import { SignupReactiveDemoComponent } from './userdisplay/signup-reactive-demo/signup-reactive-demo.component';
import { EdiuserreactiveComponent } from './userdisplay/ediuserreactive/ediuserreactive.component';
import { LoginComponent } from './login/login.component';
import { UserGuardService } from './user-guard.service';
// import { DemoComponent } from './demo/demo.component';
// import { Demo1Component } from './demo1/demo1.component';
// import { Demo2Component } from './demo2/demo2.component';
import { ProductResolverService } from './product-resolver.service';
import { Product1Component } from './product1/product1.component';
import { UserResolverService } from './user-resolver.service';
import { User1Component } from './user1/user1.component';
import { AppCustomePreloader } from './appcustomepreloader';
import { HomeComponent } from './home/home.component';
import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';
import { TaskaddComponent } from './taskdisplay/taskadd/taskadd.component';
import { EdittaskComponent } from './taskdisplay/edittask/edittask.component';
import { Taskdisplay1Component } from './taskdisplay1/taskdisplay1.component';



const arr : Routes=[
  {path:'',component:HomeComponent},
  {path:'product1',resolve:{pdata:ProductResolverService},component:Product1Component},
  {path:'product', canLoad:[UserGuardService],loadChildren:'./productdisplay/product.module#ProductModule'},
  {path:'customer',data:{preload:true},loadChildren:'./customer/customer.module#CustomerModule'},
  {path:'users',data:{preload:true},loadChildren:'./userdisplay/user.module#UserModule'},
  {path:'taskdisplay',component:TaskdisplayComponent},
  {path:'addtask',component:TaskaddComponent},
  {path:'edittask/:Id',component:EdittaskComponent},
  // {path:'signup2',canActivate:[UserGuardService],component:SignupReactiveDemoComponent},
  {path:'user1',resolve:{udata:UserResolverService},component:User1Component},
  {path:'taskdisplay1',component:Taskdisplay1Component},
  {path:'login',component:LoginComponent},
  // {path:'demo',component:DemoComponent},
  // {path:'demo1/:id',component:Demo1Component},
  // {path:'demo2',component:Demo2Component},


  {path:'edituserreactive/:user_email',component:EdiuserreactiveComponent},

  {path:'**',redirectTo:'/pagenotfound'}
];

export const routing=RouterModule.forRoot(arr,{preloadingStrategy:AppCustomePreloader});
