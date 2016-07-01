import { Component } from '@angular/core';

@Component({
	selector: 'car-parts',
	templateUrl: 'app/car-parts.component.html',
	styleUrls: ['app/car-parts.component.css']
})

export class CarPartsComponent {
	carParts = [{
		"id" : 1,
		"name" : "Super Tires",
		"description" : "These tires are the very best",
		"inStock" : 5,
		"price" : 39.99
	},
	{
		"id" : 2,
		"name" : "Reinforced Shocks",
		"inStock" : 4,
		"price" : 29.99
	},
	{
		"id" : 3,
		"name" : "Turbocharger",
		"inStock" : 0,
		"price" : 199.99
	}];
	totalCarParts(){
		let sum = 0;
		for(let carPart of this.carParts){
			sum += carPart.inStock;
		}
		return sum; 
	}					
}