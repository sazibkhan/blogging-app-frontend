import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {BlogPostApiService} from "../../service/blogpost.api.service";

@Component({
  selector: 'app-blog-post-save',
  templateUrl: './blog-post-save.component.html',
  styleUrls: ['./blog-post-save.component.css']
})
export class BlogPostSaveComponent implements OnInit {

  blogPostForm!: FormGroup;
  submitted = false;
  show!: boolean;
  serverError = '';

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private  blogPostApiService : BlogPostApiService) {}


  public  ngOnInit(): void {
    this.blogPostForm = this.formBuilder.group({
      blogPostTitle: ['', Validators.required],
      blogPostBody: ['', Validators.required]

    });

  }



  get f() {
    return this.blogPostForm.controls;
  }

  public onSubmit() {
    this.submitted = true;
    if (this.blogPostForm.invalid) {
    }
    this.blogPostApiService.saveBlogPostService(
      this.f.blogPostTitle.value,
      this.f.blogPostBody.value)
      .subscribe(
        data => {
          /*Toast.fire({type: 'success', title: 'Sign Up in successfully'});*/
          this.router.navigate(['getBlogPostList']);
        },
        error => {
          if (error.status === 500) {
            this.serverError = 'Already taken Blog Post Information';
          }
        });

  }

}
