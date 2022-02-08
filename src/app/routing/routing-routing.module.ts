import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KitchenNavComponent } from '../components/kitchen-nav/kitchen-nav.component';
import { WaiterNavComponent } from '../components/waiter-nav/waiter-nav.component';
import { LoginComponent } from '../components/login/login.component';
import { AuthGuard } from '../services/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'kitchen-nav', component: KitchenNavComponent, canActivate: [AuthGuard] },
  { path: 'waiter-nav', component: WaiterNavComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //forRoot???
  exports: [RouterModule]
})
export class RoutingModule { }
