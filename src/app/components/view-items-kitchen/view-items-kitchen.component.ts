import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';

@Component({
  selector: 'app-view-items-kitchen',
  templateUrl: './view-items-kitchen.component.html',
  styleUrls: ['./view-items-kitchen.component.css']
})
export class ViewItemsKitchenComponent implements OnInit
{
  selStatus: number = 2;
  selItem: any;
  allItems: any = []
  categories: any = []
  constructor(private apiService: APIService) { }

  ngOnInit(): void
  {
    this.apiService.getMenuItems().subscribe(res => this.allItems = res)
    this.apiService.getCategories().subscribe(res => this.categories = res)
  }

  setAvailable(item: any)
  {
    item.status = 1
    this.apiService.updateMenuItem(item).subscribe()
  }
  setUnavailable(item: any)
  {
    item.status = 2
    this.apiService.updateMenuItem(item).subscribe()
  }

  updateCategories(item: any)
  {

  }
}
