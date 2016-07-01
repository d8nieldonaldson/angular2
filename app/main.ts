import {bootstrap}	from '@angular/platform-browser-dynamic';
import {Component}	from '@angular/core';


@Component({
	selector: 'my-app',
	template: `<h1>{{title}}</h1>
				<p>There are {{totalCarParts()}} total car parts in stock.</p>
				<ul>
					<li *ngFor="let carPart of carParts">
						<h2>{{carPart.name | uppercase}}</h2>
						<p>{{carPart.description}}</p>
						<p *ngIf="carPart.inStock > 0">{{carPart.inStock}}	in Stock</p>
						<p *ngIf="carPart.inStock === 0">Out of Stock</p>
						<p>{{carPart.price | currency:'EUR':true}}</p>
					</li>
				</ul>`
})

class AppComponent{ 
	title = 'Ultra Racing';
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

bootstrap(AppComponent);
