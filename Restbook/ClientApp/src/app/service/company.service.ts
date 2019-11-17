import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { pipe, Observable } from 'rxjs';
import { CompanyModel } from '../model/company.model';
import { map, flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private http: HttpClient, private configService: ConfigService) { }

  public getTop() : Observable<CompanyModel[]>
  {
    return this.configService.AppConfig.pipe(
      flatMap(config => {
        const apiURL = config.apiURL;
        const controller = 'api/org/top';
        const url = `${apiURL}/${controller}`;

        return this.http.get<CompanyModel[]>(url);
      }));
  }

  public getModel(id: string) : Observable<CompanyModel>
  {
    return this.configService.AppConfig.pipe(
      flatMap(config => {
        const apiURL = config.apiURL;
        const controller = 'api/org';
        const url = `${apiURL}/${controller}/${id}`;

        return this.http.get<CompanyModel>(url);
      }));
  }
}
