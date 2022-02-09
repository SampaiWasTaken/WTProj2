import { Component, OnInit } from '@angular/core';
import { Subscription, Observable, interval } from 'rxjs';
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
  selCat: number[] = [];
  unselCat: number[] = [];
  totalCat: number[] = [];

  updateCats: any = [];
  updateMenuItems: any = [];
  private updateSub?: Subscription;
  constructor(private apiService: APIService) { }

  ngOnInit(): void
  {
    this.initItems()
    this.updateSub = interval(3000).subscribe(res => this.updateItems())
  }

  initItems()
  {
    this.apiService.getMenuItems().subscribe(res => this.allItems = res)
    this.apiService.getCategories().subscribe(res => this.categories = res)
  }

  updateItems()
  {
    this.apiService.getMenuItems().subscribe(res => 
    {
      this.updateMenuItems = res;
      if (this.updateMenuItems.length != this.allItems.length)
      {
        let diff = this.updateMenuItems.splice(this.allItems.length, this.updateMenuItems.length)
        console.log(diff)
        this.allItems.push(...diff)
      }
    })
    this.apiService.getCategories().subscribe(res => 
    {
      this.updateCats = res;
      if (this.updateCats.length != this.categories.length)
      {
        let diff = this.updateCats.splice(this.categories.length, this.updateCats.length)
        console.log(diff)
        this.categories.push(...diff)
      }
    })
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
  checkCheckBoxvalue(event: any)
  {
    if (event.checked)
    {
      this.selCat.push(event.source.value)
      this.unselCat = this.unselCat.filter(item => item !== event.source.value)
    }
    else
    {
      this.selCat = this.selCat.filter(item => item !== event.source.value)
      this.unselCat.push(event.source.value)
    }
  }

  updateCategories(item: any)
  {
    this.totalCat = item.category

    this.totalCat = this.totalCat.concat(this.selCat.filter(item => !this.totalCat.includes(item)))
    this.totalCat = this.totalCat.filter(item => !this.unselCat.includes(item))

    item.category = this.totalCat

    this.apiService.updateMenuItem(item).subscribe()
  }
}
