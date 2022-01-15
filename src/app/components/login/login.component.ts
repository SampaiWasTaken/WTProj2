import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{

  constructor(private authService: AuthService) { }

  ngOnInit(): void
  {
    if (sessionStorage.getItem("currentUser") == null || sessionStorage.getItem("currentUser") == "")
      this.authService.login("Giovanni", "password")
    console.log(sessionStorage.getItem("currentUser"))
  }

}
