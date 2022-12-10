import { Travel } from './../../../models/travel.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TravelService } from 'src/app/services/travel.service';

@Component({
  selector: 'app-travel-create',
  templateUrl: './travel-create.component.html',
  styleUrls: ['./travel-create.component.css']
})
export class TravelCreateComponent implements OnInit {
  public travel: Travel = {
    title: '',
    description: '',
    destiny:'',
  }


  constructor(private travelService: TravelService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createTravel(): void {
    //criamos um Observable, instância que define uma função de observer . 
    //Esta é a função que é executada quando um consumidor chama o subscribe()método. 
    //A função subscribe() define como obter ou gerar valores ou mensagens a serem publicadas.
    this.travelService.create(this.travel).subscribe(() => {
      this.travelService.showMessage('Viagem criada com sucesso.')
      this.router.navigate(['/travel/create'])
    })
  }

  cancel(): void {
    this.router.navigate(['/travel'])
  }
}
