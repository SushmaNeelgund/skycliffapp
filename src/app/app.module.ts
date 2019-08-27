import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { routing } from "./app.routing";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupReactiveDemoComponent } from './userdisplay/signup-reactive-demo/signup-reactive-demo.component';
import { EdiuserreactiveComponent } from './userdisplay/ediuserreactive/ediuserreactive.component';
import { LoginComponent } from './login/login.component';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Interceptordemo } from './interceptordemo';
import { Product1Component } from './product1/product1.component';
import { User1Component } from './user1/user1.component';
import { AppCustomePreloader } from './appcustomepreloader';
import { HomeComponent } from './home/home.component';
import { TaskaddComponent } from './taskdisplay/taskadd/taskadd.component';
import { EdittaskComponent } from './taskdisplay/edittask/edittask.component';
import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';
import { Taskdisplay1Component } from './taskdisplay1/taskdisplay1.component';

import { Addtask1Component } from './taskdisplay1/addtask1/addtask1.component';
import { Edittask1Component } from './taskdisplay1/edittask1/edittask1.component';


// import { CustomerModule } from './customer/customer.module';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PagenotfoundComponent,
    SignupReactiveDemoComponent,
    EdiuserreactiveComponent,
    LoginComponent,
    DemoComponent,
    TaskaddComponent,
    EdittaskComponent,
    TaskdisplayComponent,
    Demo1Component,
    Demo2Component,
    Product1Component,
    User1Component,
    HomeComponent,
    Taskdisplay1Component,
    Addtask1Component,
    Edittask1Component
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:Interceptordemo,multi:true},AppCustomePreloader
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
