import { Component, OnInit, Input } from '@angular/core';
import { CompanyService } from 'src/app/service/company.service';
import { LocationModel } from 'src/app/shared/model/location.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-location-details',
  templateUrl: './location.details.component.html',
  styleUrls: ['./location.details.component.scss']
})
export class LocationDetailsComponent implements OnInit {

  @Input() companyID: string;
  @Input() model: LocationModel;

  constructor(private router: Router) { }

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

 public openScheme() {
  const command = ['restoran', this.companyID, 'scheme'];
  this.router.navigate(command);
 }

 public openCatalogue(id: string) {
  const command = ['restoran', this.companyID, 'menu'];
  this.router.navigate(command);
 }
}
