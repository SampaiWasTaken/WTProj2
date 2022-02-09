import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';
import { Observable,Subscription, interval  } from 'rxjs';

@Component({
  selector: 'app-view-order-waiter',
  templateUrl: './view-order-waiter.component.html',
  styleUrls: ['./view-order-waiter.component.css']
})



export class ViewOrderWaiterComponent implements OnInit
{
  private updateSubscription?: Subscription;
  allOrders: any = []
  constructor(private apiService: APIService) { }

  ngOnInit(): void
  {
    this.getData();

    this.updateSubscription = interval(10000).subscribe(
      (val) => { this.getData()});
    
  }

   getData():void {
    this.apiService.getOrdersKitchen().subscribe(res =>
      {
        let oldorders = this.allOrders;
        this.allOrders = res;
        this.allOrders = this.allOrders.filter((o: any) => {
           let inserOrder = false;
           for(let oi of o.orderedItems){
              if(oi.status !== 4){
                inserOrder = true;
              }
           }
          return inserOrder 
        })

        for(let i = 0; i<oldorders.length; i++){
          for(let j = 0; j<this.allOrders.length; j++){
              if(oldorders[i].orderId === this.allOrders[j].orderId){
                this.allOrders[j].panelStatus = oldorders[i].panelStatus;
              }
          }
        }
  
      })
  
      this.apiService.getMenuItems().subscribe((res: any) =>
      {
        this.allItemsInformation = res;
      })
  
      this.apiService.getStatusDesc().subscribe(res =>
      {
        this.statusDesc = res;
      })

      //console.log(this.allOrders)
  }

  openPanel(order: any){
    for(let j = 0; j<this.allOrders.length; j++){
      if(this.allOrders[j].orderId === order.orderId){
        this.allOrders[j].panelStatus = "true"
      }else{
        this.allOrders[j].panelStatus = "false"
      }
    }
    //console.log(this.allOrders)
  }

  closePanel(order: any){
    for(let j = 0; j<this.allOrders.length; j++){
      if(this.allOrders[j].orderId === order.orderId){
        this.allOrders[j].panelStatus = "false"
        break;
      }else{
        this.allOrders[j].panelStatus = "false"
      }
    }
    //console.log(this.allOrders)
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
