import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ILogin } from 'src/app/interfaces/login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
  hide = true
  model: ILogin = { username: "bruv", pw: "kek" }
  loginForm!: FormGroup;
  message!: string;
  returnUrl!: string;
  user!: any;

  constructor(
    private FormBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private apiService: APIService
  ) { }



  ngOnInit(): void
  {
    this.apiService.init();
    this.loginForm = this.FormBuilder.group({
      username: ['', Validators.required],
      pw: ['', Validators.required]
    });
    this.authService.logout();
    this.returnUrl = "/login"
  }

  get f() { return this.loginForm; }

  login()
  {

    //stop here if form is invalid  
    if (this.loginForm.invalid)
    {
      console.log(this.loginForm.value)
      return;
    }
    else
    {
      var response;
      this.apiService.login(this.f.controls['username'].value, this.f.controls['pw'].value).subscribe(res => { response = res; console.log(response); this.handleLogin(response) })
    }
  }

  handleLogin(response: any)
  {
    if (Number.isInteger(response.userID))
    {
      console.log("Login successful");
      //this.authService.authLogin(this.model);  
      localStorage.setItem('isLoggedIn', "true");
      localStorage.setItem('token', response.token);
      var user;
      this.apiService.getUsersByID(response.userID).subscribe(res => { user = res; console.log(user); this.handleRoute(user) })


    }
    else
    {
      console.log(this.f.value)
      this.message = "Wrong user credentials";
    }
  }

  handleRoute(user: any)
  {
    if (user.roles[0] === 2)
      this.router.navigate(["/waiter-nav"]);
    else if (user.roles[0] === 3)
      this.router.navigate(["/kitchen-nav"]);
    else
      this.router.navigate(["/login"]);
  }
}
