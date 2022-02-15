import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-waiter-nav',
  templateUrl: './waiter-nav.component.html',
  styleUrls: ['./waiter-nav.component.css']
})
export class WaiterNavComponent implements OnInit
{

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void
  {
  }

  /** Logout function that is called by the Logout button  */
  logout()
  {
    //console.log('logout');
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
