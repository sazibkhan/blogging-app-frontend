import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UserSignupApiService} from "../../service/usersignup.api.service";

@Component({
  selector: 'app-user-update-profile',
  templateUrl: './user-update-profile.component.html',
  styleUrls: ['./user-update-profile.component.css']
})
export class UserUpdateProfileComponent implements OnInit {
  signUpForm!: FormGroup;
  submitted = false;
  show!: boolean;
  serverError = '';
  userId! : string ;
  userList: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private  userSignupApiService : UserSignupApiService) {
      this.route.params.subscribe(params => {
      this.userId = this.route.snapshot.params['id'];
    });
  }


  public ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.getUserListByUserId(this.userId);
  }

  get f() {
    return this.signUpForm.controls;
  }

  public onSubmit(){
    this.submitted = true;
    if (this.signUpForm.invalid) {
      return;
    }
    this.userSignupApiService.updateUserById(
      this.userId ,
      this.f.username.value,
      this.f.email.value,
      this.f.password.value)
      .subscribe(
        data => {
          /*Toast.fire({type: 'success', title: 'Sign Up in successfully'});*/
          this.router.navigate(['getUserList']);
        },
        error => {
          if (error.status === 500) {
            this.serverError = 'Already taken phone number';
          }
        });
  }


  public getUserListByUserId(userId:string){
    this.userSignupApiService.getUserUpdateById(userId)
      .subscribe(res => {
        this.userList = res;
        console.log(this.userList);

      });
  }
  back(){

  }

}
