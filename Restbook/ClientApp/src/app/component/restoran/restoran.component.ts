import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/service/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restoran',
  templateUrl: './restoran.component.html',
  styleUrls: ['./restoran.component.scss']
})
export class RestoranComponent implements OnInit {

  constructor(private modelService: CompanyService, private router: Router) { }

  ngOnInit() {
    this.router.
  }

}
