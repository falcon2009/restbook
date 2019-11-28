import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { pipe, Observable, of } from 'rxjs';
import { CompanyModel } from '../model/company.model';
import { map, flatMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private http: HttpClient, private configService: ConfigService) { }

  private modelList: CompanyModel[] = [];

  public getTop(): Observable<CompanyModel[]> {
    return this.configService.AppConfig.pipe(
      flatMap(config => {
        const apiURL = config.apiURL;
        const controller = 'api/org/top';
        const url = `${apiURL}/${controller}`;

        return this.http.get<CompanyModel[]>(url).pipe(tap(modelList => {
          const list: CompanyModel[] = [];
          modelList.forEach(item => list.push(item));
          this.modelList = list;
        } ));
      }));
  }

  public getModel(id: string): Observable<CompanyModel> {
    const model = this.modelList.find(item => item.guid = id);

    if (model != null || model !== undefined) {return of(model);}

    const source =  (model != null || model !== undefined)
                    ? of(model)
                    : this.configService.AppConfig.pipe(
                      flatMap(config => {
                      const apiURL = config.apiURL;
                      const controller = 'api/org';
                      const url = `${apiURL}/${controller}/${id}`;

                      return this.http.get<CompanyModel>(url);
                    }));

    return source;
  }
}
