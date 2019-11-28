import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../shared/service/config.service';
import { Observable, of } from 'rxjs';
import { CompanyModel } from '../shared/model/company.model';
import { flatMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private http: HttpClient, private configService: ConfigService) { }

  private modelList: CompanyModel[] = [];
  private modelActive: CompanyModel = null;
  private activeID: string;

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
}
