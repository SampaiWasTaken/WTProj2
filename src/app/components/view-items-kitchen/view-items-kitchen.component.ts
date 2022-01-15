import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';

@Component({
  selector: 'app-view-items-kitchen',
  templateUrl: './view-items-kitchen.component.html',
  styleUrls: ['./view-items-kitchen.component.css']
})
export class ViewItemsKitchenComponent implements OnInit
{

  allItems: any = []
  constructor(private apiService: APIService) { }

  ngOnInit(): void
  {
    this.apiService.getMenuItems().subscribe(res =>
    {
      this.allItems = res;
    })
  }

}
