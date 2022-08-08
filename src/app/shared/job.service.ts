import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  readonly baseURL = 'http://localhost:3000/jobs'

  constructor(private http: HttpClient) { }

  post_data(job: { Company: string; State: string; }) {
    return this.http.post(this.baseURL, job);
  }

  get_data() {
    return this.http.get(this.baseURL);
  }
}
