import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';
import { Observable,Subscription, interval  } from 'rxjs';

@Component({
  selector: 'app-view-items-for-pickup-waiter',
  templateUrl: './view-items-for-pickup-waiter.component.html',
  styleUrls: ['./view-items-for-pickup-waiter.component.css']
})
export class ViewItemsForPickupWaiterComponent implements OnInit {
  private updateSubscription?: Subscription;

  allOrders: any = []
  allItemsInformation?: any;
  constructor(private apiService: APIService) { }

  ngOnInit(): void
  {
    this.updateSubscription = interval(10000).subscribe(
      (val) => { this.getData()});
    this.getData();
    this.apiService.getStatusDesc().subscribe(res =>
    {
      this.statusDesc = res;
    })


      
  }

  getData():void{
    this.apiService.getMenuItems().subscribe((res: any) =>
    {
      this.allItemsInformation = res;
    })
    
    this.apiService.getOrdersKitchen().subscribe(res =>
    {
      this.allOrders = res;

      //checks if a single item isnt delivered
      this.allOrders = this.allOrders.filter((o: any) => {
        let addOrderBool = false;
        for(let i = 0; i<o.orderedItems.length; i++){
          if(o.orderedItems[i].status === 3 || o.orderedItems[i].status === 5){
            addOrderBool =  true;
          }
        }
        return addOrderBool;
      }) // Change === LATER!!!!
    })
  }

    Button_intransit(order: any, orderItem: any){
      orderItem.status = 5;
      this.apiService.updateOrderItems(order, orderItem).subscribe();

    }
 
    Button_delivered(order: any, orderItem: any){
      orderItem.status = 4;
      this.apiService.updateOrderItems(order, orderItem).subscribe();

    }
 
  statusDesc?: any

}

