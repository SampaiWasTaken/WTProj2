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

  /** Initializes items on first load */
  initItems()
  {
    this.apiService.getOrdersKitchen().subscribe(res =>
    {
      this.allOrders = res
      this.orders = this.allOrders.filter((o: any) =>
      {
        let inserOrder = false;
        for (let oi of o.orderedItems)
        {
          if (oi.status !== 4)
          {
            inserOrder = true;
          }
        }
        return inserOrder
      })
    })

    this.apiService.getMenuItems().subscribe(res => 
    {
      this.menuItems = res;
    })
  }

  /** Called to update items. Only Items not previously in the item lists will be added to the already existing Arrays. */
  updateItems()
  {
    if (localStorage.getItem('isLoggedIn') == "true")
    {
      this.apiService.getOrdersKitchen().subscribe(res =>
      {
        this.updateAllOrders = res
        let updateOrders = this.updateAllOrders.filter((o: any) =>
        {
          let inserOrder = false;
          for (let oi of o.orderedItems)
          {
            if (oi.status !== 4)
            {
              inserOrder = true;
            }
          }
          return inserOrder
        })
        if (updateOrders.length != this.orders.length)
        {
          let diff = updateOrders.splice(this.orders.length, updateOrders.length)
          this.orders.push(...diff)
        }
      })

      this.apiService.getMenuItems().subscribe(res => 
      {
        this.updateMenuItems = res;
        if (this.updateMenuItems.length != this.menuItems.length)
        {
          let diff = this.updateMenuItems.splice(this.menuItems.length, this.updateMenuItems.length)
          this.menuItems.push(...diff)
        }
      })
    }
  }

  /** Sets the status of an order. */
  setStatus(order: any)
  {
    this.apiService.updateOrdersKitchen(order).subscribe();
  }

  /** Sets a custom comment for items in an order.
   * Handeled by inputfields
   */
  addComment(order: any)
  {
    for (let item of order.orderedItems)
    {
      this.apiService.updateOrderItems(order, item).subscribe();
      //console.log("Item ID " + item.itemId + "with text " + item.text)
    }
  }

  /** Used for debugging purposes */
  updateStatusUpdate(item: any)
  {
    //console.log("changed to " + item.status)
  }

  /** Updates the status for the given item in an order. */
  updateStatus(order: any)
  {
    for (let item of order.orderedItems)
    {
      this.apiService.updateOrderItems(order, item).subscribe();
      //console.log("Item ID " + item.itemId + "with status " + item.status)
    }
  }

  /** Used for debugging purposes */
  updateTextUpdate(item: any)
  {
    //console.log("changed to " + item.text)
  }

  /** Used for Material Dropboxes in order to rearrange items */
  drop(event: CdkDragDrop<string[]>, order: any)
  {
    moveItemInArray(order.orderedItems, event.previousIndex, event.currentIndex);
  }
}
