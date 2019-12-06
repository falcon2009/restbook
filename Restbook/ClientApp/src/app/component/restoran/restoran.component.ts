import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs';
import { CompanyModel } from '../../model/company.model';

@Component({
  selector: 'app-restoran',
  templateUrl: './restoran.component.html',
  styleUrls: ['./restoran.component.scss']
})
export class RestoranComponent implements OnInit {
public modelID: string;
public model$: Observable<CompanyModel>;

  constructor() { }

  ngOnInit() {
  }
}
