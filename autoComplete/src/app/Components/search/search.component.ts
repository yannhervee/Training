import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  
  selectedCity: string = "";
  searchInput: string = "";
  filterOptions: string[] = [];
  us_cities: string[] = [
    "Abilene",
    "Boulder",
    "Chicago",
    "Dallas",
    "Eugene",
    "Fresno",
    "Greensboro",
    "Houston",
    "Indianapolis",
    "Jackson",
    "Knoxville",
    "Las Vegas",
    "Milwaukee",
    "Nashville",
    "Omaha",
    "Phoenix",
    "Queens",
    "Raleigh",
    "San Diego",
    "Tampa",
    "Utica",
    "Virginia Beach",
    "Wichita",
    "Xenia",
    "Yonkers",
    "Zanesville",
    "Augusta",
    "Baton Rouge",
    "Cincinnati",
    "Denver",
    "El Paso",
    "Fort Worth",
    "Grand Rapids",
    "Honolulu",
    "Irvine",
    "Jersey City",
    "Kansas City",
    "Louisville",
    "Memphis",
    "Newark",
    "Oakland",
    "Portland",
    "Reno",
    "Seattle",
    "Toledo",
    "Upland",
    "Vero Beach",
    "Washington",
    "Yuba City",
    "Zephyrhills"
]

 filter():void {
    const searchWord: string = this.searchInput.toLowerCase();
    this.filterOptions = this.us_cities.filter(city => city.toLowerCase().includes(searchWord));
}

selectCity(city: string): void {
  this.selectedCity = city;
  this.searchInput = city;
  this.filterOptions = []; // clear suggestions after selecting
}

}
