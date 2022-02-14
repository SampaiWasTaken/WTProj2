import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate
{

  private token: string = "";
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean
  {
    if (this.isLoggedIn())
    { return true; }
    this.router.navigate(['/login']);
    return false;
  }

  /** cgecks if there is a loggend in user in current session */
  public isLoggedIn(): boolean
  {
    let status = false;
    if (localStorage.getItem('isLoggedIn') == "true")
    {
      status = true;
    }
    else
    {
      status = false;
    }
    return status;
  }
}
