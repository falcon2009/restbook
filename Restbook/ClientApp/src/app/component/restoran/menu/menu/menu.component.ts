import { Component, OnInit } from '@angular/core';
import { ViewMode } from 'src/app/shared/enum/view.mode';
import { StateService } from 'src/app/shared/service/state.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private stateService: StateService) { }

  ngOnInit() {
    const viewMode = ViewMode.Scheme;
    this.stateService.setViewMode(viewMode);
  }
}
