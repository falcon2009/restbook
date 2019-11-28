import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { merge } from 'rxjs/operators'
import { CompanyModel } from 'src/app/shared/model/company.model';
import { StateService } from 'src/app/shared/service/state.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location.list.component.html',
  styleUrls: ['./location.list.component.scss']
})
export class LocationListComponent implements OnInit {
public modelID: string;
public model$

  constructor(private stateService: StateService) { }

  ngOnInit() {
    this.model$ = 
}

