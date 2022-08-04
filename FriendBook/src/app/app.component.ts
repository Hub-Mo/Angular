import { Component } from '@angular/core';
import {Friend} from "./friend";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FriendBook';
  languageArray = ['PHP', 'html', 'css', 'js'];
  friend = new Friend(null, null,null,null,null,null,);

}
