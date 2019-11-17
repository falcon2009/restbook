import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../model/appconfig';
import { Observable, of } from 'rxjs';
import { tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private readonly key = 'app-config-cache';
  private readonly endpoint = 'config';

  constructor(private http: HttpClient) { }

  public get AppConfig(): Observable<AppConfig>{
    const source = (this.config != null)
                      ? of(this.config)
                      : this.http.get<AppConfig>(this.endpoint).pipe(tap(model=> this.config = model));
    return source;
  }

  private get config(): AppConfig {
    const storageConfigStr = sessionStorage.getItem(this.key);
    const storageConfig: AppConfig = JSON.parse(storageConfigStr);

    return storageConfig;
  }
  
  private set config(conf: AppConfig) {
    sessionStorage.setItem(this.key, JSON.stringify(conf));
  }
}
