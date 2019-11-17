import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  public getModelList
}
