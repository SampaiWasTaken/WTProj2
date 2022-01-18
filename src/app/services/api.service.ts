import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDI1MTA1MzgsImV4cCI6MTY0Mjc2OTczOH0.-FzCfxzQphZNEhh0DRv9kKJyJheJytsKwXVBmBRboEw'
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

  getOrders() { }

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

  updateOrdersKitchen(order: any)
  {
    return this.httpClient.put(`${this.API}/orders/${order.orderId}`, order, httpOptions)
  }

  getCategories()
  {
    return this.httpClient.get(`${this.API}/categories`, httpOptions)
  }
}
