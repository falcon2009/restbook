import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/service/company.service';

@Component({
  selector: 'app-restoran-details',
  templateUrl: './restoran.details.component.html',
  styleUrls: ['./restoran.details.component.scss']
})
export class RestoranDetailsComponent implements OnInit {

  constructor(private modelService: CompanyService) { }

  ngOnInit() {
  }
}
