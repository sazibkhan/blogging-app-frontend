import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostSaveComponent } from './blog-post-save.component';

describe('BlogPostSaveComponent', () => {
  let component: BlogPostSaveComponent;
  let fixture: ComponentFixture<BlogPostSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
