import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Request } from './../request';


var httpHeader = new HttpHeaders({ 'Content-Type': 'application/json' })
var authKey = localStorage.getItem('token')
if (authKey) httpHeader = httpHeader.append('Authorization', authKey)
var httpOptions = { headers: httpHeader };


@Injectable({
  providedIn: 'root'
})
export class APIService
{


  API: string = 'https://webtech.salespool.at'

  constructor(private httpClient: HttpClient) { this.init() }

  init()
  {
    httpHeader = new HttpHeaders({ 'Content-Type': 'application/json' })
    authKey = localStorage.getItem('token')
    if (authKey) httpHeader = httpHeader.append('Authorization', authKey)
    httpOptions = { headers: httpHeader };
  }

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
    return this.httpClient.get(`${this.API}/resources/orderstatuslist`, httpOptions)
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
    return this.httpClient.put(`${this.API}/guestrequest/${request.guestReguestID}`, new Request(5, request.tableID), httpOptions);

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
    return this.httpClient.get(`${this.API}/orders/${order.orderId}/items`, httpOptions)
  }

  updateOrderItems(order: any, orderItem: any)
  {
    return this.httpClient.put(`${this.API}/orders/${order.orderId}/items/${orderItem.itemId}`, { number: orderItem.number, orderItemSatusID: orderItem.status, text: orderItem.text }, httpOptions)
  }

  login(user: string, pw: string)
  {
    return this.httpClient.post(`${this.API}/authentication/login/`, { username: user, password: pw })
  }

  getUsers()
  {
    return this.httpClient.get(`${this.API}/users`, httpOptions)
  }
  getUsersByID(userID: number)
  {

    this.init()
    console.log(httpOptions)
    return this.httpClient.get(`${this.API}/users/${userID}`, httpOptions)
  }
}
