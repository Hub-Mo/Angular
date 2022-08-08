import { Component } from '@angular/core';
import {Friend} from "./friend";
import { AddFriendService } from './add-friend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'FriendBook';
  languageArray = ['PHP', 'html', 'css', 'js'];
  friend = new Friend(null, null,null,null,null,null,);
  allFriends : any;

  constructor(private addFriendService : AddFriendService) {}

  onSubmit(){

    console.log(this.friend);
    const observable = this.addFriendService.addFriend(this.friend);

    observable.subscribe({
      next: (data) => {console.log(data);},
      error: (error) => {console.log(error),console.log('failed')},
      complete: () => console.log('it worked'),
    })

    callingFriendList('http://localhost:6969/addfriends');
}
}

async function callingFriendList(url : string) : Promise<any>{
  const response = await fetch(url);
  const allFriends = await response.json();
  console.log(allFriends);
  return allFriends;
}

