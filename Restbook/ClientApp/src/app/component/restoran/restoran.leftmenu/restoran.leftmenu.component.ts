import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/service/state.service';
import { Observable, of } from 'rxjs';
import { ViewMode } from 'src/app/enum/view.mode';
import { filter, flatMap } from 'rxjs/operators';


@Component({
  selector: 'app-restoran-leftmenu',
  templateUrl: './restoran.leftmenu.component.html',
  styleUrls: ['./restoran.leftmenu.component.scss']
})
export class RestoranLeftMenuComponent implements OnInit {

  public isVisible$: Observable<boolean>;
  constructor(private stateService: StateService) { }

  ngOnInit() {
    this.isVisible$ = this.stateService.viewMode$.pipe(
      flatMap(item => {
          const isVisible = (item === ViewMode.Menu || item === ViewMode.Scheme); 
          return of(isVisible);
      })
    );
  }
}
