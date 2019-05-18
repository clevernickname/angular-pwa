import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../services/newsapi.service';

@Component({
  selector: 'app-articles-javascript',
  templateUrl: './articles-javascript.component.html',
  styleUrls: ['./articles-javascript.component.css']
})
export class ArticlesJavascriptComponent implements OnInit {
  JSArticles: Array<any>;

  constructor(private newsapi: NewsapiService) {}

  ngOnInit() {
    // news articles
    this.newsapi
      .initArticlesJavaScript()
      .subscribe(data => (this.JSArticles = data.articles));
  }
}
