import { Component } from '@angular/core';
import {Friend} from "./friend";
import { AddFriendService } from './add-friend.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit{
  title = 'FriendBook';
  languageArray = ['PHP', 'html', 'css', 'js'];
  friend = new Friend(null, null,null,null,null,null,);
  allMyFriends : Friend[] = [];
  value : any;
  url : string = 'http://localhost:6969/allfriends';

  constructor(private addFriendService : AddFriendService) {}

  onSubmit(){

    console.log(this.friend);
    const observable = this.addFriendService.addFriend(this.friend);

    observable.subscribe({
      next: (data) => {console.log(data);},
      error: (error) => {console.log(error),console.log('failed')},
      complete: () => console.log('it worked'),
    })

    //callingFriendList('http://localhost:6969/allfriends');
    this.displayAllFriends();
}
ngOnInit(): void {
  this.displayAllFriends();
}
public async displayAllFriends(): Promise<any> {
  this.value = await fetch(this.url) 
  this.allMyFriends = await this.value.json();
  console.log(this.allMyFriends);
}

removeFriend(friend : string | null) {
  console.log(this.allMyFriends.findIndex(friend));
}
}
