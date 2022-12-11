import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-travel-crud',
  templateUrl: './travel-crud.component.html',
  styleUrls: ['./travel-crud.component.css']
})
export class TravelCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Minhas Viagens',
      icon: 'flight',
      routeURL: '/travel'
    }
   }

  ngOnInit(): void {
  }

  navigateToTravelCreate(): void {
    this.router.navigate(['/travel/create'])
  }

}
