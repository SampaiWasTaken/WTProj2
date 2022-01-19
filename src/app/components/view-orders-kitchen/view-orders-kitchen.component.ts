import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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

  addComment(order: any)
  {
    for (let item of order.orderedItems)
    {
      this.apiService.updateOrderItems(order, item).subscribe();
      console.log("Item ID " + item.itemId + "with text " + item.text)
    }
  }

  updateStatusUpdate(item: any)
  {
    console.log("changed to " + item.status)
  }

  updateStatus(order: any)
  {
    for (let item of order.orderedItems)
    {
      this.apiService.updateOrderItems(order, item).subscribe();
      console.log("Item ID " + item.itemId + "with status " + item.status)
    }
  }

  updateTextUpdate(item: any)
  {
    console.log("changed to " + item.text)
  }

  drop(event: CdkDragDrop<string[]>, order: any)
  {
    moveItemInArray(order.orderedItems, event.previousIndex, event.currentIndex);
  }
}
