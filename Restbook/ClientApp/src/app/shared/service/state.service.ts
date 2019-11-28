import { Injectable, EventEmitter } from '@angular/core';
import { StateModel } from '../model/state.model';
import { ViewMode } from '../enum/view.mode';
import { CompanyModel } from '../model/company.model';
import { LocationModel } from '../model/location.model';
import { CatalogModel } from '../model/catalog.model';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StateService {
  private state: StateModel = { viewMode: ViewMode.Home };
  private modeEvent: EventEmitter<ViewMode> = new EventEmitter<ViewMode>();
  private companyEvent: EventEmitter<CompanyModel> = new EventEmitter<CompanyModel>();
  private locationEvent: EventEmitter<LocationModel> = new EventEmitter<LocationModel>();
  private catalogueEvent: EventEmitter<CatalogModel> = new EventEmitter<CatalogModel>();

  public reset() {
    const mode = ViewMode.Home;
    this.setMode(mode);
    this.setActiveCataloge(null);
    this.setActiveLocation(null);
  }
  public setMode(mode: ViewMode) {
    this.state.viewMode = mode;
    this.modeEvent.emit(mode);
  }
  public setActiveCompany(model: CompanyModel){
    this.state.activeCompany = model;
    this.companyEvent.emit(model);
  }
  public setActiveLocation(model: LocationModel){
    this.state.activeLocation = model;
    this.locationEvent.emit(model);
  }
  public setActiveCataloge(model: CatalogModel){
    this.state.activeCatalog = model;
    this.catalogueEvent.emit(model);
  }
  public get initialView(): ViewMode {
    return this.state.viewMode;
  }
  public get initialCompany(): Observable<CompanyModel> {
    return of(this.state.activeCompany);
  }
  public get initialLocation(): LocationModel {
    return this.state.activeLocation;
  }
  public get initialCatalog(): CatalogModel {
    return this.state.activeCatalog;
  }
  public get viewMode$() : Observable<ViewMode> {
    return this.modeEvent.asObservable();
  }
  public get activeCompany$() : Observable<CompanyModel> {
    return this.companyEvent.asObservable();
  }
  public get activeLocation$() : Observable<LocationModel> {
    return this.locationEvent.asObservable();
  }
  public get activeCatalog$() : Observable<CatalogModel> {
    return this.catalogueEvent.asObservable();
  }    
}
