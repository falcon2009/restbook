import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CompanyService } from './service/company.service';
import { CompanyModel } from './model/company.model';
import { Router } from '@angular/router';
import { StateService } from './service/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public model: CompanyModel = new CompanyModel();
  public title = 'Restbook';
  public isIn = false;
  private modelSubscription: Subscription;

  constructor(private modelService: CompanyService, private stateService: StateService, private router: Router) { }

  ngOnInit() {
    this.modelSubscription = this.modelService.getTop().subscribe(
      modelArray => {
        const model = modelArray[0];
        Object.assign(this.model, model);
        this.stateService.setActiveCompany(this.model);
    });
  }
  
  ngOnDestroy() {
    if (this.modelSubscription != null || !this.modelSubscription.closed) { this.modelSubscription.unsubscribe(); }
  }

  public move() {
    this.isIn = !this.isIn;
    const command = this.isIn ? ['/company'] : ['/'];
    this.router.navigate(command);
  }

  public out() {
    this.isIn = false;
    const command = ['/'];
    this.router.navigate(command)
  }

  public get caption(): string {
    return this.isIn ? 'Get out' : 'Get in';
  }
}
