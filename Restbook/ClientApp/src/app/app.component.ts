import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CompanyService } from './service/company.service';
import { CompanyModel } from './model/company.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public model: CompanyModel;
  public title = 'Restbook';
  public isIn = false;
  private modelSubscription: Subscription;

  constructor(private modelService: CompanyService, private router: Router) { }

  ngOnInit() {
    this.modelSubscription = this.modelService.getTop().subscribe(
      modelArray => {
        this.model = modelArray[0];
    });
  }
  ngOnDestroy() {
    if (this.modelSubscription != null || !this.modelSubscription.closed) { this.modelSubscription.unsubscribe(); }
  }

  public move() {
    this.isIn = !this.isIn;
    const command = this.isIn ? ['/restoran', this.restoranID] : ['/'];
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

  get restoranID(): string {
    if (this.model === undefined && this.model == null) { return ''; }

    return this.model.guid;
  }
}
