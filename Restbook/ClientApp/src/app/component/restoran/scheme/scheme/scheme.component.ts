import { Component, OnInit, AfterViewChecked, AfterContentInit } from '@angular/core';
import { StateService } from 'src/app/service/state.service';
import { ViewMode } from 'src/app/enum/view.mode';

@Component({
  selector: 'app-scheme',
  templateUrl: './scheme.component.html',
  styleUrls: ['./scheme.component.scss']
})
export class SchemeComponent implements OnInit, AfterContentInit  {


  constructor(private stateService: StateService) { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    const viewMode = ViewMode.Scheme;
    this.stateService.setViewMode(viewMode);
  }
}
