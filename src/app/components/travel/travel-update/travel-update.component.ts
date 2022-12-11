import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Travel } from 'src/app/models/travel.model';
import { TravelService } from 'src/app/services/travel.service';

@Component({
  selector: 'app-travel-update',
  templateUrl: './travel-update.component.html',
  styleUrls: ['./travel-update.component.css']
})
export class TravelUpdateComponent implements OnInit {
  public travel: Travel = {
    title: '',
    description: '',
    destiny:'',
  }

  constructor(private travelService: TravelService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('_id')
    this.travelService.readById(id!).subscribe(travel => {
      this.travel = travel
    })
  }

  updateTravel(): void {
    this.travelService.update(this.travel).subscribe(() => {
      this.travelService.showMessage('Viagem atualizada com sucesso.')
      this.router.navigate(['/travel']);
    })
  }

  cancel(): void {
    this.router.navigate(['/travel'])
  }

}
