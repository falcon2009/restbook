import { Component, OnInit, Input,  } from '@angular/core';

@Component({
  selector: 'app-restoran-toolbar',
  templateUrl: './restoran.toolbar.component.html',
  styleUrls: ['./restoran.toolbar.component.scss']
})
export class RestoranToolbarComponent implements OnInit {

  @Input() restoranID: string
  constructor() { }

  ngOnInit() {
  }
}
