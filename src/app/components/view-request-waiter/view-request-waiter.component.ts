import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { APIService } from '../../services/api.service';
import { Request } from 'src/app/request';
import {MatSnackBar} from '@angular/material/snack-bar';

import { Observable,Subscription, interval  } from 'rxjs';

@Component({
  selector: 'app-view-request-waiter',
  templateUrl: './view-request-waiter.component.html',
  styleUrls: ['./view-request-waiter.component.css']
})
export class ViewRequestWaiterComponent implements OnInit {
  private updateSubscription?: Subscription;

  allRequests: any = []
  myreq?: Request
  constructor(private apiService: APIService,
    private cdr: ChangeDetectorRef, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.requestData();
  }

  //** Continuosly updates the data in a fixed interval and checks for changes. If a change is detected, a snackbar is opened. */
  requestData(){
    this.updateSubscription = interval(5000).subscribe(
      (val) => { this.apiService.getRequests().subscribe(res =>
        {
          let oldData = this.allRequests;
          this.allRequests = res;
          this.allRequests = this.allRequests.filter((o: any) => {return o.status === 1})
         // console.log(this.allRequests)
         if(oldData.length !== this.allRequests.length && oldData.length < this.allRequests.length){
          this._snackBar.open("new Customer Request", "okay");
         }
    
        })});

    this.apiService.getRequests().subscribe(res =>
      {
        this.allRequests = res;
        this.allRequests = this.allRequests.filter((o: any) => {return o.status === 1})
       // console.log(this.allRequests)
  
      })
  }

  
  /** Changes the Status of a given request to completed */
  requestProcessed(req: any){
    this.apiService.setRequest(req).subscribe( bruh => {this.ngOnInit()});

  }

}
