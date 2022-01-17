import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-orders-kitchen',
  templateUrl: './view-orders-kitchen.component.html',
  styleUrls: ['./view-orders-kitchen.component.css']
})
export class ViewOrdersKitchenComponent implements OnInit
{

  constructor(private apiService: APIService) { }
  allOrders: any = [];
  orders: any = [];

  ngOnInit(): void
  {
    this.apiService.getOrdersKitchen().subscribe(res =>
    {
      this.allOrders = res
      this.orders = this.allOrders.filter((el: any) => el.status === 1)
    })

  }

}
