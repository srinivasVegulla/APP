import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(   
     private fb: FormBuilder,
     private router: Router
    ) { }

    ngOnInit() {
      this.loginForm = this.fb.group({
        username: ['cloudadmin', Validators.required],
        password: ['tcs@12345', Validators.required],
      });
    }
  
    get username() { 
      return this.loginForm.get('username'); 
    }
    get password() { 
      return this.loginForm.get('password'); 
    }

    onLogin(x){
      console.log("hi res", x)
      this.router.navigate(['/home']);
    }
}
