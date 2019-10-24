import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  news: any = [];
  constructor(private newService: NewsService, private router: Router) {}

  ngOnInit() {
    this.getNews();
  }
  
  getNews() {
    this.newService.index()
      .subscribe(
        res => {
          this.news = res;
        },
        err => console.error(err)
      );
  }

  detailNew(id: string, title:string, img:string, content:string) {;
    let data = {
      id: id,
      title: title,
      img:img,
      content: content
    }
    this.router.navigate(['/home-detail', data])
  }
}
