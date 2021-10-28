import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostUpdateProfileComponent } from './blog-post-update-profile.component';

describe('BlogPostUpdateProfileComponent', () => {
  let component: BlogPostUpdateProfileComponent;
  let fixture: ComponentFixture<BlogPostUpdateProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostUpdateProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostUpdateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
