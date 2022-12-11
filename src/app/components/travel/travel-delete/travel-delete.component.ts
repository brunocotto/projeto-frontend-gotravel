import { TravelService } from 'src/app/services/travel.service';
import { Component, OnInit } from '@angular/core';
import { Travel } from 'src/app/models/travel.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-travel-delete',
  templateUrl: './travel-delete.component.html',
  styleUrls: ['./travel-delete.component.css']
})
export class TravelDeleteComponent implements OnInit {
  public travel: Travel = {
    title: '',
    description: '',
    destiny:'',
  }

  constructor(private travelSercice: TravelService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('_id');
    this.travelSercice.readById(id!).subscribe(travels => {
      this.travel = travels;
    })
  }

  deleteTravel(): void {
    this.travelSercice.delete(`${this.travel._id}`).subscribe(() => {
      this.travelSercice.showMessage('Viagem removida com sucesso.');
      this.router.navigate(['/travel']);
    })
  }

  cancel(): void {
    this.router.navigate(['/travel']);
  }

}
