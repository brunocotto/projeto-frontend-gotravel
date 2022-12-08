import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-crud',
  templateUrl: './travel-crud.component.html',
  styleUrls: ['./travel-crud.component.css']
})
export class TravelCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToTravelCreate(): void {
    this.router.navigate(['/travel/create'])
  }

}
