import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { merge } from 'rxjs/operators'
import { CompanyModel } from 'src/app/model/company.model';
import { StateService } from 'src/app/service/state.service';
import { ViewMode } from 'src/app/enum/view.mode';

@Component({
  selector: 'app-location-list',
  templateUrl: './location.list.component.html',
  styleUrls: ['./location.list.component.scss']
})
export class LocationListComponent implements OnInit {
public modelID: string;
public model$: Observable<CompanyModel>;

  constructor(private stateService: StateService) { }

  ngOnInit() {
    const viewMode = ViewMode.LocationList;
    this.stateService.setViewMode(viewMode);
    this.model$ = this.stateService.activeCompany$;
  }
}