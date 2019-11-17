import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CompanyService } from './service/company.service';
import { CompanyModel } from './model/company.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public model: CompanyModel;
  public title = 'Restbook';
  private modelSubscription: Subscription

  constructor(private modelService: CompanyService) { }

  ngOnInit() {
    this.modelSubscription = this.modelService.getTop().subscribe(
      modelArray => {
        let model = new CompanyModel();
        Object.assign(model, modelArray[0]);
        this.model = model;
    });
  }
  ngOnDestroy(){
    if (this.modelSubscription != null || !this.modelSubscription.closed) this.modelSubscription.unsubscribe();
  }
}
