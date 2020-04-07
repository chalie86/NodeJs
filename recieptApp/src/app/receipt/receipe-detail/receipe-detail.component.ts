import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.css']
})
export class ReceipeDetailComponent implements OnInit {
  //selectedRecipe: Recipe;
  @Input() receipt: Recipe;

  constructor() { }

  ngOnInit() {
  }
}
