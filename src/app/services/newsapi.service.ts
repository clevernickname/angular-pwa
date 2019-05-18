import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {
  api_key = 'b5ea3b4495e3440ca9ad6e275d44459a';

  constructor(private http: HttpClient) {}

  initArticles(): Observable<any> {
    return this.http.get(
      'https://newsapi.org/v2/top-headlines?category=technology&language=en&country=us&apiKey=' +
        this.api_key
    );
  }

  initArticlesJavaScript(): Observable<any> {
    return this.http.get(
      'https://newsapi.org/v2/everything?q=javascript&sortBy=popularity&apiKey=' +
        this.api_key
    );
  }
}
