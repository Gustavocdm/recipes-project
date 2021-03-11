import { Component, OnInit } from '@angular/core';

import { Recipe } from './../../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Spaghetti', "A delicious sphagetti cooked by eminem's mother. He did never win a battle before without been ate this spaghetti. Probably this text has a lot of english gramatic errors, but fuck it.", 'https://d1uz88p17r663j.cloudfront.net/resized/b01d809ae03b3751bc39c90498eb9f33_Pinoy-Spaghetti_Main_1500_700.jpg'),
    new Recipe('Spaghetti', "A delicious sphagetti cooked by eminem's mother. He did never win a battle before without been ate this spaghetti. Probably this text has a lot of english gramatic errors, but fuck it.", 'https://d1uz88p17r663j.cloudfront.net/resized/b01d809ae03b3751bc39c90498eb9f33_Pinoy-Spaghetti_Main_1500_700.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
