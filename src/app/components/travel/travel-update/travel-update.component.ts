import { TravelService } from 'src/app/services/travel.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Travel } from 'src/app/models/travel.model';

@Component({
  selector: 'app-travel-update',
  templateUrl: './travel-update.component.html',
  styleUrls: ['./travel-update.component.css']
})
export class TravelUpdateComponent implements OnInit {
  travel!: Travel;

  constructor(private travelervice: TravelService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('_id')
    this.travelervice.readById(id!).subscribe(travel => {
      this.travel = travel
    })
  }

  updateTravel(): void {
    this.travelervice.update(this.travel).subscribe(() => {
      this.travelervice.showMessage('Viagem atualizada com sucesso.')
      this.router.navigate(['/travel']);
    })
  }

  cancel(): void {
    this.router.navigate(['/travel'])
  }

}
