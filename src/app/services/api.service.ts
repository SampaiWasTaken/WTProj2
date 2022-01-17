import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDI0Mzk3NDYsImV4cCI6MTY0MjY5ODk0Nn0.LicxB2BsOKrz2o9VjrUk7mQH90w3bKS2oyFwsg_ZswM'
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
  
    getMenuItemByID(id: number)
  {
    return this.httpClient.get(`${this.API}/menuItems/${id}`, httpOptions)
  }

  getStatusDesc() //what each status number -> 1 = open,...
  {
    return this.httpClient.get(`${this.API}/orders/status`, httpOptions)
  }

  getOrders()
  {
    return this.httpClient.get(`${this.API}/orders`, httpOptions)
  }

  getRequests()
  {
    return this.httpClient.get(`${this.API}/guestrequest`, httpOptions)
  }

  
  setRequest(request: any)
  {
    return this.httpClient.put(`${this.API}/guestrequest`, request, httpOptions).pipe()
  }


  

}
