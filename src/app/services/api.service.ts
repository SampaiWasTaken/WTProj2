import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDIxNzA0NjMsImV4cCI6MTY0MjQyOTY2M30.JbNYJ1jtrvQBq_HYOEGsZIrxp5ylWliUBnFZySkfg_s'
  })
};

@Injectable({
  providedIn: 'root'
})
export class APIService
{

  API: string = 'https://webtech.salespool.at'

  constructor(private httpClient: HttpClient) { }

  getMenuItems()
  {
    return this.httpClient.get(`${this.API}/menuItems`, httpOptions)
  }
}
