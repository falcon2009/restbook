import { Component, OnInit, Input } from '@angular/core';
import { CompanyService } from 'src/app/service/company.service';
import { LocationModel } from 'src/app/model/location.model';

@Component({
  selector: 'app-restoran-details',
  templateUrl: './restoran.details.component.html',
  styleUrls: ['./restoran.details.component.scss']
})
export class RestoranDetailsComponent implements OnInit {

  @Input('model') model: LocationModel;

  constructor(private modelService: CompanyService) { }

  ngOnInit() {
    const fileName = this.model.imageInfo;
    const fileUrl = `../../../assets/${this.model.imageInfo}`;
    this.model.imageInfo = fileUrl;
  }

  public get hasAction():boolean {
     return (this.model != null && this.model !== undefined && this.model.actionDescription !== '');
  }

  public get hasEvent():boolean {
    return (this.model != null && this.model !== undefined && this.model.eventDescription !== '');
 }
}
