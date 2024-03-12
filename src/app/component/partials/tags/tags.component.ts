import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/serices/food.service';
import { Tag } from 'src/app/shared/models/Tag';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags?: Tag[];
  constructor(foodService: FoodService) {
    this.tags = foodService.getAllTags();
  }
  ngOnInit(): void {
  }


}
