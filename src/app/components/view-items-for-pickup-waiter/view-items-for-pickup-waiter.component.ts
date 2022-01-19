import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';

@Component({
  selector: 'app-view-items-for-pickup-waiter',
  templateUrl: './view-items-for-pickup-waiter.component.html',
  styleUrls: ['./view-items-for-pickup-waiter.component.css']
})
export class ViewItemsForPickupWaiterComponent implements OnInit {

  allOrders: any = []
  allItemsInformation?: any;
  constructor(private apiService: APIService) { }

  ngOnInit(): void
  {

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
          if(o.orderedItems[i].status !== 3){
            addOrderBool =  true;
          }
        }

        return addOrderBool;
        
      }) // Change === LATER!!!!
    })
    

    this.apiService.getStatusDesc().subscribe(res =>
    {
      this.statusDesc = res;
    })

    /*
    for(let j = 0; j<this.allOrders.length; j++){
      for(let i = 0; i < this.allOrders[j].orderedItems.length; i++){
        
        this.allOrders[j].orderedItems[i]["itemDetails"] = this.allItemsInformation.filter((i:any)=>{return i.itemId === this.allOrders[j].orderedItems[i].itemId})[0]
        this.allOrders[j].orderedItems[i]
    }
    }
    */
    
      
  }

  
  onClick() {
    console.log(this.allOrders)
    }

    Button_intransit(){

    }
 
    Button_delivered(){

    }
 
  statusDesc?: any


}
