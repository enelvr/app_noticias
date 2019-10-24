import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Detail } from 'src/app/models/New';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.page.html',
  styleUrls: ['./home-detail.page.scss'],
})
export class HomeDetailPage implements OnInit {
  detail: Detail = {
    id: 0,
    title: ''
  };
  constructor(private router: Router, private activedRouter: ActivatedRoute ) {
   }

  ngOnInit() {
    const data = this.activedRouter.snapshot.params;
    this.detail = data;
  }


}
