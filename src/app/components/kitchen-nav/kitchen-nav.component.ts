import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-kitchen-nav',
  templateUrl: './kitchen-nav.component.html',
  styleUrls: ['./kitchen-nav.component.css']
})
export class KitchenNavComponent implements OnInit
{

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void
  {
  }

  logout()
  {
    //console.log('logout');
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
