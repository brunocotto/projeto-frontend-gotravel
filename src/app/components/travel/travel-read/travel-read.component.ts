
import { Travel } from './../../../models/travel.model';
import { Component, OnInit } from '@angular/core';
import { TravelService } from 'src/app/services/travel.service';

@Component({
  selector: 'app-travel-read',
  templateUrl: './travel-read.component.html',
  styleUrls: ['./travel-read.component.css']
})
export class TravelReadComponent implements OnInit {

   //products! => "!" sintaxe existe para aqueles casos comuns em que você não pode garantir que o valor será definido imediatamente. 
   travels?: Travel[]
   displayedColumns = ['_id', 'title', 'description', 'destiny']

  constructor(private travelService: TravelService) {}

  ngOnInit(): void {
    this.travelService.read().subscribe(travels => {
      this.travels = travels
      console.log(travels)
    })
  }

}
