import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ViewItemsKitchenComponent } from './components/view-items-kitchen/view-items-kitchen.component'
import { LoginComponent } from './components/login/login.component';
import { ViewOrderWaiterComponent } from './components/view-order-waiter/view-order-waiter.component';
import { ViewRequestWaiterComponent } from './components/view-request-waiter/view-request-waiter.component';
import { ViewOrdersKitchenComponent } from './components/view-orders-kitchen/view-orders-kitchen.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button';
import { ViewItemsForPickupWaiterComponent } from './components/view-items-for-pickup-waiter/view-items-for-pickup-waiter.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTabsModule } from '@angular/material/tabs';
import { KitchenNavComponent } from './components/kitchen-nav/kitchen-nav.component';
import { WaiterNavComponent } from './components/waiter-nav/waiter-nav.component';
import { RequestWaiterNotificationComponent } from './components/request-waiter-notification/request-waiter-notification.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
//import { initializeApp } from "firebase/app";
//initializeApp(environment.firebase);
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RoutingModule } from './routing/routing-routing.module'
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './services/auth.guard';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    ViewItemsKitchenComponent,
    LoginComponent,
    ViewOrderWaiterComponent,
    ViewRequestWaiterComponent,
    ViewOrdersKitchenComponent,
    ViewItemsForPickupWaiterComponent,
    KitchenNavComponent,
    WaiterNavComponent,
    RequestWaiterNotificationComponent
  ],
  imports: [
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
    BrowserModule,
    HttpClientModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    DragDropModule,
    MatTabsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    MatSnackBarModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
