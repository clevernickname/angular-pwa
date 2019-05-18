import { Component } from '@angular/core';
import { NewsapiService } from '../services/newsapi.service';

@Component({
  selector: 'app-articles-technology',
  templateUrl: './articles-technology.component.html',
  styleUrls: ['./articles-technology.component.css']
})
export class ArticlesTechnologyComponent {
  Articles: Array<any>;

  constructor(private newsapi: NewsapiService) {}

  ngOnInit() {
    // news articles
    this.newsapi
      .initArticles()
      .subscribe(data => (this.Articles = data.articles));
  }
}
