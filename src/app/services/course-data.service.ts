import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CourseDataService {

  private REST_API_SERVER = "";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest() {
    return this.httpClient.get(this.REST_API_SERVER);
  }

  getId(courseId) {
    this.REST_API_SERVER = `https://golf-courses-api.herokuapp.com/courses/${courseId}`
  }
}
