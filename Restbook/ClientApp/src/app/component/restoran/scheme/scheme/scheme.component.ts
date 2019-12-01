import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/shared/service/state.service';
import { ViewMode } from 'src/app/shared/enum/view.mode';

@Component({
  selector: 'app-scheme',
  templateUrl: './scheme.component.html',
  styleUrls: ['./scheme.component.scss']
})
export class SchemeComponent implements OnInit {

  constructor(private stateService: StateService) { }

  ngOnInit() {
    const viewMode = ViewMode.Scheme;
    //this.stateService.setViewMode(viewMode);
  }
}
