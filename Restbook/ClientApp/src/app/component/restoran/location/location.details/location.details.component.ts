import { Component, OnInit, Input } from '@angular/core';
import { LocationModel } from 'src/app/shared/model/location.model';
import { Router } from '@angular/router';
import { StateService } from 'src/app/shared/service/state.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location.details.component.html',
  styleUrls: ['./location.details.component.scss']
})
export class LocationDetailsComponent implements OnInit {

  @Input() companyID: string;
  @Input() model: LocationModel;

  constructor(private stateService: StateService, private router: Router) { }

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
  // this.stateService.setActiveLocation(this.model);
  const command = ['/company', 'scheme'];
  this.router.navigate(command);
 }

 public openCatalogue(id: string) {
  // this.stateService.setActiveLocation(this.model); 
  const command = ['/company', 'menu'];
  this.router.navigate(command);
 }
}
