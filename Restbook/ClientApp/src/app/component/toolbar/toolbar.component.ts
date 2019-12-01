import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { StateService } from 'src/app/shared/service/state.service';
import { Observable, of } from 'rxjs';
import { ViewMode } from 'src/app/shared/enum/view.mode';
import { LocationModel } from 'src/app/shared/model/location.model';
import { flatMap } from 'rxjs/operators';
import { CompanyModel } from 'src/app/shared/model/company.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, AfterContentInit {

  public activeCompany$: Observable<CompanyModel>
  public activeLocation$: Observable<LocationModel>;
  public isVisible$: Observable<boolean>;
  
  constructor(private stateService: StateService) { }

  ngOnInit() {
    this.activeCompany$ = this.stateService.activeCompany$;
    this.activeLocation$ = this.stateService.activeLocation$;
    this.isVisible$ = this.stateService.viewMode$.pipe(
      flatMap(item => {
          const isVisible = (item === ViewMode.Menu || item === ViewMode.Scheme); 
          return of(isVisible);
      })
    );
  }

  ngAfterContentInit() {
 
  }

  public changeLocation(model: LocationModel) {
    this.stateService.setActiveLocation(model);
  }
}
