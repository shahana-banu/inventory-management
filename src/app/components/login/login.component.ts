import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material' 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  constructor(private router: Router) { }
username: string;
password: string;
User: string;


  ngOnInit() {
  }
  login() : void {

    if(this.username == 'admin' && this.password == 'admin' && this.User == 'Worker') {
        this.router.navigate(['/list'])
        
    } 
    if(this.username == 'admin' && this.password == 'admin' && this.User == 'Stack Handler')  
    {
      this.router.navigate(['/slist'])
    }
    
    else {
      alert (this.username);
    }
  }
  }
