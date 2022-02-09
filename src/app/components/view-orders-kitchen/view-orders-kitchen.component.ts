import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Subscription, Observable, interval } from 'rxjs';


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

  updateAllOrders: any = [];
  updateMenuItems: any = [];

  private updateSub?: Subscription;

  ngOnInit(): void
  {
    this.initItems();
    this.updateSub = interval(3000).subscribe(res => this.updateItems())
  }

  initItems()
  {
    this.apiService.getOrdersKitchen().subscribe(res =>
    {
      this.allOrders = res
      this.orders = this.allOrders.filter((el: any) => el.status != 5)
    })

    this.apiService.getMenuItems().subscribe(res => 
    {
      this.menuItems = res;
    })
  }

  updateItems()
  {
    this.apiService.getOrdersKitchen().subscribe(res =>
    {
      this.updateAllOrders = res
      let updateOrders = this.updateAllOrders.filter((el: any) => el.status != 5)
      if (updateOrders.length != this.orders.length)
      {
        let diff = updateOrders.splice(this.orders.length, updateOrders.length)
        console.log(diff)
        this.orders.push(...diff)
      }
    })

    this.apiService.getMenuItems().subscribe(res => 
    {
      this.updateMenuItems = res;
      if (this.updateMenuItems.length != this.menuItems.length)
      {
        let diff = this.updateMenuItems.splice(this.menuItems.length, this.updateMenuItems.length)
        console.log(diff)
        this.menuItems.push(...diff)
      }
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
