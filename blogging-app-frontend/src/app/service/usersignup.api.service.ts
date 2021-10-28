import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({providedIn: 'root'})
export class UserSignupApiService {

  constructor(private http: HttpClient) {}

  private userSignUp: string = environment.apiHost + '/user/insert';
  private userGetInformation: string = environment.apiHost + '/user/get/allInformation';
  private userGetInformationByUserId: string = environment.apiHost + '/user/get/allInformation/by/';
  private userUpdateInformationByUserId: string = environment.apiHost + '/user/get/Information/updateBy/';
  private userDeleteInformationByUserId: string = environment.apiHost + '/user/delete/Information/by/';

  public userSignUpService(username: string, email: string, password: string): Observable<any> {
        return this.http.post(this.userSignUp, {
          username: username,
          email: email,
          password: password

      },
    );
  }


  public getUserList(): Observable<any> {
        return this.http.get(this.userGetInformation, httpOptions).pipe(map(res => res));

  }

  public getUserUpdateById(userId: string): Observable<any> {
        return this.http.get(this.userGetInformationByUserId + userId, httpOptions).pipe(map(res => res));

  }

  public updateUserById(userId: string, username: string, email: string, password: string): Observable<any> {
    return this.http.put(this.userUpdateInformationByUserId + userId, {
      username: username,
      email: email,
      password: password
      },
    );
  }

  public userDeleteById(userId: string): Observable<any> {
    return this.http.delete(this.userDeleteInformationByUserId + userId, httpOptions)
      .pipe(map(res => res));

  }

}
