import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsapiService } from '../services/newsapi.service';

@Component({
  selector: 'app-articles-technology',
  templateUrl: './articles-technology.component.html',
  styleUrls: ['./articles-technology.component.css']
})
export class ArticlesTechnologyComponent {
  articles$: Observable<any>;

  constructor(private newsapi: NewsapiService) {}

  ngOnInit() {
    // technology news articles
    this.articles$ = this.newsapi.getArticlesTechnology();
  }
}
