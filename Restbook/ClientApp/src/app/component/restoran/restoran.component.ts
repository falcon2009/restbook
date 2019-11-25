import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/service/company.service';
import { Subscription, Observable, Subject, AsyncSubject, BehaviorSubject, ReplaySubject } from 'rxjs';
import { CompanyModel } from '../../shared/model/company.model';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-restoran',
  templateUrl: './restoran.component.html',
  styleUrls: ['./restoran.component.scss']
})
export class RestoranComponent implements OnInit {
public modelID: string;
public model$: Observable<CompanyModel>;

  private routSubscription: Subscription;

  constructor(private modelService: CompanyService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.model$ = this.router.params.pipe(
                        switchMap( params => {
                          const id = params['id'];
                          this.modelID = id;
                          return this.modelService.getModel(id);
                        })
                      );
  }
}
