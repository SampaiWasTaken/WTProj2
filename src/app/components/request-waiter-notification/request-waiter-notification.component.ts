import { Component, OnInit } from '@angular/core';
import { environment } from "../../../environments/environment";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import {MatSnackBar} from '@angular/material/snack-bar';

import { Observable,Subscription, interval  } from 'rxjs';

@Component({
  selector: 'app-request-waiter-notification',
  templateUrl: './request-waiter-notification.component.html',
  styleUrls: ['./request-waiter-notification.component.css'],
})

export class RequestWaiterNotificationComponent implements OnInit {
  private updateSubscription?: Subscription;
  title = 'af-notification';
  message:any = null;
  constructor(private _snackBar: MatSnackBar) {}
  ngOnInit(): void {

   // this.updateSubscription = interval(10000).subscribe(
   //  (val) => {

    //    this._snackBar.open("myMessage", "action");

    //   });
 

    //this.requestPermission();  //jo wollte eigentlich die firebase api verwenden, habe aber keine zeit mehr mich in das backend der anderen gruppe einzulesen und die haben auch keine zeit mehr mir kurz zu helfen, tjo kann man nix machen
    //this.listen();
  }
  requestPermission() {
    const messaging = getMessaging();
    getToken(messaging, 
     { vapidKey: environment.firebase.vapidKey}).then(
       (currentToken) => {
         if (currentToken) {
           console.log("Hurraaa!!! we got the token.....");
           console.log(currentToken);
         } else {
           console.log('No registration token available. Request permission to generate one.');
         }
     }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
    });
  }
  listen() {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      this.message=payload;
      let myText = ""+payload.notification?.title
      this.openSnackBar(myText, "okay");
    });
  }


  openSnackBar(myMessage: string, action: string) {
    this._snackBar.open(myMessage, action);
  }

}