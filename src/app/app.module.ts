import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ViewItemsKitchenComponent } from './components/view-items-kitchen/view-items-kitchen.component'
import { LoginComponent } from './components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewOrdersKitchenComponent } from './components/view-orders-kitchen/view-orders-kitchen.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewItemsKitchenComponent,
    LoginComponent,
    ViewOrdersKitchenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
