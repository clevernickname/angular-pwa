import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesJavascriptComponent } from './articles-javascript.component';

describe('ArticlesJavascriptComponent', () => {
  let component: ArticlesJavascriptComponent;
  let fixture: ComponentFixture<ArticlesJavascriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesJavascriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesJavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
