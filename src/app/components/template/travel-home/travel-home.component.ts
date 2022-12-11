import { HeaderService } from 'src/app/components/template/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-home',
  templateUrl: './travel-home.component.html',
  styleUrls: ['./travel-home.component.css']
})
export class TravelHomeComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routeURL: '/home'
    }
   }

  ngOnInit(): void {
  }

}
