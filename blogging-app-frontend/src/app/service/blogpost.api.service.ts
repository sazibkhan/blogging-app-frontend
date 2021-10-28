import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({providedIn: 'root'})
export class BlogPostApiService {

  constructor(private http: HttpClient) {}

  private saveBlogPost: string = environment.apiHost + '/blogpost/insert';
  private getBlogPostAllInformation: string = environment.apiHost + '/blogpost/get/allInformation';
  private getBlogPostInformationByBlogPostId: string = environment.apiHost + '/blogpost/get/allInformation/by/';
  private updateBlogPostInformationByBlogPostId: string = environment.apiHost + '/blogpost/get/Information/updateBy/';
  private deleteBlogPostInformationByBlogPostId: string = environment.apiHost + '/blogpost/delete/Information/by/';

  public saveBlogPostService(blogPostTitle: string, blogPostBody: string): Observable<any> {
        return this.http.post(this.saveBlogPost, {
          blogPostTitle: blogPostTitle,
          blogPostBody: blogPostBody
      },
    );
  }


  public getBlogPostList(): Observable<any> {
        return this.http.get(this.getBlogPostAllInformation, httpOptions).pipe(map(res => res));

  }

  public getBlogPostUpdateById(blogPostId: string): Observable<any> {
        return this.http.get(this.getBlogPostInformationByBlogPostId + blogPostId, httpOptions).pipe(map(res => res));

  }

  public updateBlogPostById(blogPostId: string, blogPostTitle: string, blogPostBody: string): Observable<any> {
    return this.http.put(this.updateBlogPostInformationByBlogPostId + blogPostId, {
      blogPostTitle: blogPostTitle,
      blogPostBody: blogPostBody,
      },
    );
  }

  public deleteBlogPostById(blogPostId: string): Observable<any> {
    return this.http.delete(this.deleteBlogPostInformationByBlogPostId + blogPostId, httpOptions)
      .pipe(map(res => res));

  }

}
