import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Request } from '../request';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDI3ODI4NzAsImV4cCI6MTY0MzA0MjA3MH0.XqviJ5NnbbrDbf-Nfmj0hyl8ccEbPoF_uzNWG8MemSU'
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
    //console.log("Why isnt this working the first time sheeesh")
    return this.httpClient.put(`${this.API}/guestrequest/${request.guestReguestID}`, new Request(3, request.tableID), httpOptions);

  }

  updateOrdersKitchen(order: any)
  {
    return this.httpClient.put(`${this.API}/orders/${order.orderId}`, order, httpOptions)
  }

  getCategories()
  {
    return this.httpClient.get(`${this.API}/categories`, httpOptions)
  }

  getOrderItems(order: any)
  {
    return this.httpClient.get(`${this.API}/orders/${order.orderId}/items`)
  }

  updateOrderItems(order: any, orderItem: any)
  {

    return this.httpClient.put(`${this.API}/orders/${order.orderId}/items/${orderItem.itemId}`, { number: orderItem.number, orderItemSatusID: orderItem.status, text: orderItem.text }, httpOptions)
  }
}
