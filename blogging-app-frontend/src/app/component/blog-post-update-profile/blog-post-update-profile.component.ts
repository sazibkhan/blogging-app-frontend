import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UserSignupApiService} from "../../service/usersignup.api.service";
import {BlogPostApiService} from "../../service/blogpost.api.service";

@Component({
  selector: 'app-blog-post-update-profile',
  templateUrl: './blog-post-update-profile.component.html',
  styleUrls: ['./blog-post-update-profile.component.css']
})
export class BlogPostUpdateProfileComponent implements OnInit {

  blogPostForm!: FormGroup;
  submitted = false;
  show!: boolean;
  serverError = '';
  blogPostId! : string ;
  blogPostList: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private  blogPostApiService : BlogPostApiService) {
      this.route.params.subscribe(params => {
      this.blogPostId = this.route.snapshot.params['id'];
    });
  }


  public ngOnInit(): void {
    this.blogPostForm = this.formBuilder.group({
      blogPostTitle: ['', Validators.required],
      blogPostBody: ['', Validators.required],
    });
    this.getBlogPostListByBlogPostId(this.blogPostId);
  }

  get f() {
    return this.blogPostForm.controls;
  }

  public onSubmit(){
    this.submitted = true;
    if (this.blogPostForm.invalid) {
      return;
    }
    this.blogPostApiService.updateBlogPostById(
      this.blogPostId ,
      this.f.blogPostTitle.value,
      this.f.blogPostBody.value)
      .subscribe(
        data => {
          /*Toast.fire({type: 'success', title: 'Sign Up in successfully'});*/
          this.router.navigate(['getBlogPostList']);
        },
        error => {
          if (error.status === 500) {
            this.serverError = 'Already taken phone number';
          }
        });
  }


  public getBlogPostListByBlogPostId(blogPostId:string){
    this.blogPostApiService.getBlogPostUpdateById(blogPostId)
      .subscribe(res => {
        this.blogPostList = res;
        console.log(this.blogPostList);

      });
  }
  back(){

  }

}
