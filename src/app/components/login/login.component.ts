import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material' 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  createForm: FormGroup;


  constructor(private fb: FormBuilder,private router: Router) {
    this.createForm = this.fb.group({
      uname: ['', Validators.required],
      pwd: ['', Validators.required],
      user: '',
    });

   }

  ngOnInit() {
  }

  login(uname,pwd,user){
    
    if(uname=='admin' && pwd=='admin' && user=='Worker'){
      this.router.navigate(['/list'])
    }

    else if(uname=='admin' && pwd=='admin' && user=='Stack Handler'){
      this.router.navigate(['/slist'])
    }

    else{
      alert("Invalid");
    }
  }

  }
