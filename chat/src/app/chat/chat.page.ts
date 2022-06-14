import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

interface Chat {
  username: String;
  text: String;
  date: String;
  key?: String;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  @ViewChild('messageField', {static: false}) messageInput;
  @ViewChild('scrollMe', {static: false}) private myScrollContainer: ElementRef;

  chatForm: FormGroup;
  message: string;
  isGodMode: Boolean = false;
  showSpinnerIcon = false;
  showDates = false;
  chatList: Observable<Chat[]>;
  chatListRef: AngularFireList<Chat>;

  groupNumber = "G6";
  currentUser = "Enea";

  constructor(private afDb: AngularFireDatabase) {
    this.chatListRef = this.afDb.list('/chats/' + this.groupNumber);
    // this.chatList = this.chatListRef.valueChanges();
    this.chatList = this.chatListRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }
  
  async ngOnInit() {
    this.chatForm = new FormGroup({
      message: new FormControl('', [Validators.required])
    })
    this.scrollToBottom()
  }

  ngAfterViewChecked() {
    this.scrollToBottom()
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  swipeEvent(swipe) {
    // 2  = Right to left swipe
    // 4  = Left to right swipe    
    if (swipe.direction === 2 || swipe.direction === 4) {
      this.showDates = !this.showDates
    }
  }

  deleteMessage(item) {
    console.log(item)
    if (item !== '' ) {
      this.chatListRef.remove(item)
    }
  }

  sendMessage() {
    this.message = this.messageInput.value;
    
    if (this.message !== '') {
      this.showSpinnerIcon = true;
      if (this.message === '/godmode') {
        this.isGodMode = !this.isGodMode
      } else {
        let formattedDate = new Date().toLocaleString();
        this.chatListRef.push({username: this.currentUser, text: this.message, date: formattedDate})
      }
      this.message = ""
      this.messageInput.value = ""
      this.showSpinnerIcon = false;
    }
  }
}
