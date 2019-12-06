import { Injectable, EventEmitter } from '@angular/core';
import { StateModel } from '../model/state.model';
import { ViewMode } from '../enum/view.mode';
import { CompanyModel } from '../model/company.model';
import { LocationModel } from '../model/location.model';
import { CatalogModel } from '../model/catalog.model';
import { Observable, of, concat, merge } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { AppMode } from '../enum/app.mode';
import { UserType } from '../enum/user.type';


@Injectable({
  providedIn: 'root'
})
export class StateService {
  private state: StateModel = { userType: UserType.Undefined, appMode: AppMode.View, viewMode: ViewMode.Home };
  private appModeEvent: EventEmitter<AppMode> = new EventEmitter<AppMode>();
  private userTypeEvent: EventEmitter<UserType> = new EventEmitter<UserType>();
  private viewModeEvent: EventEmitter<ViewMode> = new EventEmitter<ViewMode>();
  private companyEvent: EventEmitter<CompanyModel> = new EventEmitter<CompanyModel>();
  private locationEvent: EventEmitter<LocationModel> = new EventEmitter<LocationModel>();
  private catalogueEvent: EventEmitter<CatalogModel> = new EventEmitter<CatalogModel>();

  public reset() {
    const appMode = AppMode.View;
    const viewMode = ViewMode.Home;
    this.setAppMode(appMode);
    this.setViewMode(viewMode);
    this.setActiveCataloge(null);
    this.setActiveLocation(null);
  }

  public setAppMode(appMode: AppMode)
  {
    this.state.appMode = appMode;
    this.appModeEvent.emit(appMode);
  }
  public setViewMode(viewMode: ViewMode) {
    this.state.viewMode = viewMode;
    this.viewModeEvent.emit(viewMode);
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
  public get activeAppMode() : Observable<AppMode> {
    return merge(of(this.state.appMode), this.appModeEvent.asObservable);
  }
  public get viewMode$() : Observable<ViewMode> {
    return merge(of(this.state.viewMode), this.viewModeEvent.asObservable());
  }
  public get activeCompany$() : Observable<CompanyModel> {
    return merge(of(this.state.activeCompany), this.companyEvent.asObservable());
  }
  public get activeLocation$() : Observable<LocationModel> {
    return merge(of(this.state.activeLocation), this.locationEvent.asObservable());
  }
  public get activeCatalog$() : Observable<CatalogModel> {
    return merge(of(this.state.activeCatalog), this.catalogueEvent.asObservable());
  }    
}
