import { Component, OnInit, OnDestroy } from '@angular/core';
import { CompanyService } from 'src/app/service/company.service';
import { Subscription } from 'rxjs';
import { StateService } from 'src/app/shared/service/state.service';
import { ViewMode } from 'src/app/shared/enum/view.mode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private stateService: StateService){}

  ngOnInit() {
    const mode = ViewMode.Home;
    this.stateService.setMode(mode);
  }
}
