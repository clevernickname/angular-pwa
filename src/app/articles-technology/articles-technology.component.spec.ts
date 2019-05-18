import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesTechnologyComponent } from './articles-technology.component';

describe('ArticlesTechnologyComponent', () => {
  let component: ArticlesTechnologyComponent;
  let fixture: ComponentFixture<ArticlesTechnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesTechnologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
