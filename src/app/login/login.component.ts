import { LocalizedString } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signupUsers: any[] =[];

  signupInfo: any = {
    UserName: '',
    email: '',
    password: ''
  };

  signinInfo: any= {
    UserName: '',
    password: '',
  };
  constructor(private router: Router) {}

  ngOnInit(): void {
    /* const localData = localStrorage.getItem('signUpUsers');
    if (localData != null){
      this.signupUsers= JSON.parse(localData);
    } */
  }

  onSignUp(): void{
    this.signupUsers.push(this.signupInfo);
    localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
  }
  onSignIn(){
    this.router.navigate(['home.component.html']);
  }

}
