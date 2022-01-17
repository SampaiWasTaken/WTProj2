import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDI0MTg1NTksImV4cCI6MTY0MjY3Nzc1OX0.LwVt86_XnqcuH0umMMWbbUDUraitFDE6u9JT7_NgKqU'
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

  getOrders(){}

  updateMenuItem(item: any)
  {
    return this.httpClient.put(`${this.API}/menuItems/${item.itemId}`, item, httpOptions)
  }

  getOrdersKitchen()
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


  

  updateOrdersKitchen(orderId: number)
  {
    return this.httpClient.put(`${this.API}/orders/${orderId}`, httpOptions)
  }

  getCategories()
  {
    return this.httpClient.get(`${this.API}/categories`, httpOptions)
  }
}
