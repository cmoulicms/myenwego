import { Component, OnInit } from '@angular/core';
import { OperatorService } from 'src/app/operator.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators'


@Component({
  selector: 'app-operator-form',
  templateUrl: './operator-form.component.html',
  styleUrls: ['./operator-form.component.css']
})
export class OperatorFormComponent implements OnInit {
  operator:any = {};
  id;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private operatorService: OperatorService
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) this.operatorService.get(this.id).valueChanges().pipe(take(1)).subscribe(p => this.operator = p);

  }

  save(operator) {
    // console.log(operator);
    if (this.id) this.operatorService.update(this.id, operator);

    else this.operatorService.create(operator);

    this.router.navigate(['/tour-operators']);
  }

  delete() {
    if (!confirm('Are you sure you want to delete this operator')) return;

    this.operatorService.delete(this.id);
    this.router.navigate(['/tour-operators']);

  }

  ngOnInit() {
  }

}
