import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { APIService } from '../../services/api.service';
import { Request } from 'src/app/request';

@Component({
  selector: 'app-view-request-waiter',
  templateUrl: './view-request-waiter.component.html',
  styleUrls: ['./view-request-waiter.component.css']
})
export class ViewRequestWaiterComponent implements OnInit {

  allRequests: any = []
  myreq?: Request
  constructor(private apiService: APIService,
    private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.apiService.getRequests().subscribe(res =>
      {
        this.allRequests = res;
        this.allRequests = this.allRequests.filter((o: any) => {return o.status === 1})
        console.log(this.allRequests)
  
      })
  }
  
  requestProcessed(req: any){

  // WHY ISNT THE *NGFOR NOT UPDATING WTFFFFFFFFFFFFFFFFFFFF
  //https://stackoverflow.com/questions/53203224/my-view-does-not-update-when-i-change-my-array-in-ngfor
  //no idea seemed iteresting the Stackoverflow link

  //BRUH WHY IS IT NOW WORKING WHEN I CALL NGONINIT AGAIN WTF
    this.apiService.setRequest(req).subscribe( bruh => {this.ngOnInit()});

  }

}
