import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { APIService } from '../../services/api.service';
import { Request } from 'src/app/request';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-view-request-waiter',
  templateUrl: './view-request-waiter.component.html',
  styleUrls: ['./view-request-waiter.component.css']
})
export class ViewRequestWaiterComponent implements OnInit
{
  private updateSubscription?: Subscription;

  allRequests: any = []
  myreq?: Request
  constructor(private apiService: APIService,
    private cdr: ChangeDetectorRef, private _snackBar: MatSnackBar) { }

  ngOnInit(): void
  {
    if (localStorage.getItem('isLoggedIn') == "true")
    {
      this.updateSubscription = interval(5000).subscribe(
        (val) =>
        {
          this.apiService.getRequests().subscribe(res =>
          {
            if (localStorage.getItem('isLoggedIn') == "true")
            {
              let oldData = this.allRequests;
              this.allRequests = res;
              this.allRequests = this.allRequests.filter((o: any) => { return o.status === 1 })
              // console.log(this.allRequests)
              if (oldData.length !== this.allRequests.length && oldData.length < this.allRequests.length)
              {
                this._snackBar.open("new Customer Request", "okay");
              }
            }
          })
        });
    }

    this.apiService.getRequests().subscribe(res =>
    {
      this.allRequests = res;
      this.allRequests = this.allRequests.filter((o: any) => { return o.status === 1 })
      // console.log(this.allRequests)

    })
  }

  requestProcessed(req: any)
  {

    // WHY ISNT THE *NGFOR NOT UPDATING ?!!?!?!?
    //https://stackoverflow.com/questions/53203224/my-view-does-not-update-when-i-change-my-array-in-ngfor
    //no idea seemed iteresting the Stackoverflow link

    //BRUH WHY IS IT NOW WORKING WHEN I CALL NGONINIT AGAIN WTF
    this.apiService.setRequest(req).subscribe(bruh => { this.ngOnInit() });

  }

}
