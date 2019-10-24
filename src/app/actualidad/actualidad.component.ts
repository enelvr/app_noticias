import { Component, OnInit } from '@angular/core';
import { ActualidadService } from '../services/actualidad.service';

@Component({
  selector: 'app-actualidad',
  templateUrl: './actualidad.component.html',
  styleUrls: ['./actualidad.component.scss'],
}) 
export class ActualidadComponent implements OnInit {
  
  actualidads: any = [];
  
  constructor(private actualidadService: ActualidadService) {}

  ngOnInit() {
    this.getActualidads();
  }

  getActualidads() {
    this.actualidadService.index()
      .subscribe(
        res => {
          this.actualidads = res;
        },
        err => console.error(err)
      );
  }
}
