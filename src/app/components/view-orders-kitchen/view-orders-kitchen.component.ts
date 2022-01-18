import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { OrderedItem } from 'src/OrderedItem';

@Component({
  selector: 'app-view-orders-kitchen',
  templateUrl: './view-orders-kitchen.component.html',
  styleUrls: ['./view-orders-kitchen.component.css']
})

export class ViewOrdersKitchenComponent implements OnInit
{
  constructor(private apiService: APIService) { }
  selOrder?: any;
  menuItems: any = []
  allOrders: any = [];
  orders: any = [];
  updateStatus: number = -1;

  ngOnInit(): void
  {
    this.apiService.getOrdersKitchen().subscribe(res =>
    {
      this.allOrders = res
      this.orders = this.allOrders.filter((el: any) => el.status)
    })

    this.apiService.getMenuItems().subscribe(res => 
    {
      this.menuItems = res;
      console.log(this.menuItems)
    })
  }

  setStatus(order: any)
  {
    this.apiService.updateOrdersKitchen(order).subscribe();
  }

  addComment(event: any)
  {
    console.log(event.target.value)
  }

  updateStatusUpdate(item: any)
  {
    item.status = item.target.value;
    console.log(item.status)
  }
}
