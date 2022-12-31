import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
//import { ChatService } from 'src/services/websocket/chat.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  SERVER_URL = environment.SERVER_URL_WITH_OUT_SLASH

  userInfo = JSON.parse(localStorage.getItem('UserInfo')!);
  unReedMessages: any = JSON.parse(localStorage.getItem('unReedMessages')!) || []
  messageBadge = 0
  notifications = 15;
  constructor(
    //private chatService: ChatService
    ) {
    //connect to websocket
    // if (localStorage.getItem('userToken') != null) {
    //   this.chatService.connectToWebsocket()
    //   chatService.messages.subscribe(msg => {
    //     console.log("Response from websocket: " + JSON.stringify(msg));
    //     if (msg['notificationType'] == "Chat") {
    //       if (localStorage.getItem("unReedMessages")) {
    //         this.messageBadge = this.unReedMessages['length']
    //         // this.unReedMessages.push(JSON.stringify(msg))
    //       }
    //       else {
    //         localStorage.setItem('unReedMessages', JSON.stringify(msg))
    //       }
    //       console.log(this.unReedMessages)

    //       // console.log("hello")
    //     } else if (msg['notificationType'] == "annat") {
    //       //console.log("annat")
    //     }
    //     // push data to CurrentMessages if the type is chat
    //     // push data to Currentnetification if the type is like or request
    //   });
    // }
  }
  userExist: boolean | undefined;
  ngOnInit() {
    if (localStorage.getItem("userToken")) {
      this.messageBadge = this.unReedMessages['length']
      return this.userExist = true;
    }
    else {
      return this.userExist = false;
    }
  }


  public userToken(): any {
    return localStorage.getItem("userToken");
  }

  isOpen:boolean = false
  languageMenu() {
    if (this.isOpen) {
      this.isOpen = false
    }else{
      this.isOpen = true
    }
  }
}
