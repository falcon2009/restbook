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
        this.model = modelArray[0];
    });
  }
  ngOnDestroy(){
    if (this.modelSubscription != null || !this.modelSubscription.closed) this.modelSubscription.unsubscribe();
  }

  public getIn(){
    
  }
  get restoranID(): string{
    if (this.model === undefined && this.model == null) return '';

    return this.model.guid;
  }
}
