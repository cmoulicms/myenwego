import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TourService } from 'src/app/tour.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-tour-form',
  templateUrl: './tour-form.component.html',
  styleUrls: ['./tour-form.component.css']
})
export class TourFormComponent implements OnInit {
  operators$;
  tour:any = {};
  id;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private tourService: TourService) 
    { 

      this.operators$ = tourService.getOperators().snapshotChanges();

      this.id = this.activatedRoute.snapshot.paramMap.get('id');

      if (this.id) this.tourService.get(this.id).valueChanges().pipe(take(1)).subscribe(t => this.tour = t);
  }

  save(tour) {
  
    if (this.id) this.tourService.update(this.id, tour);

    else this.tourService.create(tour);

    this.router.navigate(['/tour-available']);
  }

  delete() {
    if(!confirm('Are you sure you want to delete this tour')) return;

    this.tourService.delete(this.id);

    this.router.navigate(['/tour-available']);
  }

  ngOnInit(): void {
  }

}
