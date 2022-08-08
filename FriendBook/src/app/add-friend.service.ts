import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Friend } from './friend';
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {

private _url = 'http://localhost:6969/addfriends';

  constructor(private http : HttpClient) {}

  addFriend(friend : Friend){
      return this.http.post(this._url, friend)
  }
}
