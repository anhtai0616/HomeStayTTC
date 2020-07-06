import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { from } from 'rxjs';
import { UserService } from './../../services/homestay.service';
@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {
  
  public error: number=0;
  constructor(private router:Router,
              private user:UserService
    ) { }

  ngOnInit() {
    this.checkLogin();
  }
  checkLogin(){
    if(localStorage.getItem('user')){
      this.router.navigate(['admin']);
    }
  }
  onLogin(username:string,password:string){
    let user={
      username:username,
      password:password
    };
    if(username=='admin'&&password=='admin'){
      localStorage.setItem('user',JSON.stringify(user));
      this.router.navigate(['admin']);
    }else{
      this.error=-1;
    }
  }

}
