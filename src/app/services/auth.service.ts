import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService
{

  authKey: string = "";
  constructor(private httpClient: HttpClient) { }

  URL_API = "https://webtech.salespool.at"

  login(username: string, pw: string)
  {
    return this.httpClient.post<any>(`${this.URL_API}/authentication/login/`, { username, pw })
      .subscribe(user =>
      {
        sessionStorage.setItem('currentUser', JSON.stringify(user))
      }
      )
  }

  getKey()
  {
    return this.authKey;
  }
}

