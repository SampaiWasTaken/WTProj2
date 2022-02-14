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

  /** Initializes headers */
  init()
  {
    httpHeader = new HttpHeaders({ 'Content-Type': 'application/json' })
    authKey = localStorage.getItem('token')
    if (authKey) httpHeader = httpHeader.append('Authorization', authKey)
    httpOptions = { headers: httpHeader };
  }

  /** get all menuitems */
  getMenuItems()
  {
    return this.httpClient.get(`${this.API}/menuItems`, httpOptions)
  }

  /** get one menuitem by ID */
  getMenuItemByID(id: number)
  {
    return this.httpClient.get(`${this.API}/menuItems/${id}`, httpOptions)
  }

  /** get names of status codes */
  getStatusDesc()
  {
    return this.httpClient.get(`${this.API}/resources/orderstatuslist`, httpOptions)
  }

  /** Update a single menu item with the passed body */
  updateMenuItem(item: any)
  {
    return this.httpClient.put(`${this.API}/menuItems/${item.itemId}`, item, httpOptions)
  }

  /** get all Orders */
  getOrdersKitchen()
  {
    return this.httpClient.get(`${this.API}/orders`, httpOptions)
  }

  /** get all requests */
  getRequests()
  {
    return this.httpClient.get(`${this.API}/guestrequest`, httpOptions)
  }

  /** add a new request */
  setRequest(request: any)
  {
    return this.httpClient.put(`${this.API}/guestrequest/${request.guestReguestID}`, new Request(5, request.tableID), httpOptions);
  }

  /** update a single order with the passed body */
  updateOrdersKitchen(order: any)
  {
    return this.httpClient.put(`${this.API}/orders/${order.orderId}`, order, httpOptions)
  }

  /** get all categories */
  getCategories()
  {
    return this.httpClient.get(`${this.API}/categories`, httpOptions)
  }

  /** get all items within an order */
  getOrderItems(order: any)
  {
    return this.httpClient.get(`${this.API}/orders/${order.orderId}/items`, httpOptions)
  }

  /** update a single item within an order */
  updateOrderItems(order: any, orderItem: any)
  {
    return this.httpClient.put(`${this.API}/orders/${order.orderId}/items/${orderItem.itemId}`, { number: orderItem.number, orderItemSatusID: orderItem.status, text: orderItem.text }, httpOptions)
  }

  /** login handler */
  login(user: string, pw: string)
  {
    return this.httpClient.post(`${this.API}/authentication/login/`, { username: user, password: pw })
  }

  /** get all users */
  getUsers()
  {
    return this.httpClient.get(`${this.API}/users`, httpOptions)
  }

  /** get a single user by ID */
  getUsersByID(userID: number)
  {

    this.init()
    return this.httpClient.get(`${this.API}/users/${userID}`, httpOptions)
  }
}
