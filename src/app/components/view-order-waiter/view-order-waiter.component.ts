import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';

@Component({
  selector: 'app-view-order-waiter',
  templateUrl: './view-order-waiter.component.html',
  styleUrls: ['./view-order-waiter.component.css']
})
export class ViewOrderWaiterComponent implements OnInit
{

  allOrders: any = []
  constructor(private apiService: APIService) { }

  ngOnInit(): void
  {

    this.apiService.getOrdersKitchen().subscribe(res =>
    {
      this.allOrders = res;
      this.allOrders = this.allOrders.filter((o: any) => { return o.status !== 3 })

    })


    this.apiService.getMenuItems().subscribe((res: any) =>
    {
      this.allItemsInformation = res;
    })

    this.apiService.getStatusDesc().subscribe(res =>
    {
      this.statusDesc = res;
    })

  }

  selectedItem?: any;
  requestedItemData?: any;
  allItemsInformation?: any;
  statusDesc?: any

  onSelect(id: number): void
  {

    if (this.selectedItem === id)
    {
      this.requestedItemData = undefined
      this.selectedItem = undefined
    } else
    {
      this.selectedItem = id;

      this.requestedItemData = this.allOrders.filter((o: any) => { return o.orderId === id })[0];

      for (let i = 0; i < this.requestedItemData.orderedItems.length; i++)
      {
        let currentItemId = this.requestedItemData.orderedItems[i].itemId;
        this.requestedItemData.orderedItems[i].itemDetails = this.allItemsInformation.filter((i: any) => { return i.itemId === currentItemId })[0]

      }
    }

  }


}
