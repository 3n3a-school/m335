import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import {AlertController} from '@ionic/angular'

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

  groupNumber$ = new Subject<string>();
  currentUser = "Enea";

  constructor(private afDb: AngularFireDatabase, private alertController: AlertController) {
    this.groupNumber$.subscribe(gn => {
      this.chatListRef = this.afDb.list('/chats/' + gn);
      this.chatList = this.chatListRef.snapshotChanges().pipe(
        map(changes => 
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
    })
  }
  
  async ngOnInit() {
    this.groupNumber$.next("G6")
    this.chatForm = new FormGroup({
      message: new FormControl('', [Validators.required])
    })
    this.scrollToBottom()
    
  }

  ngAfterViewChecked() {
    this.scrollToBottom()
  }

  async showRoomChoice() {
    const alert = await this.alertController.create({
      header: 'Enter a Room Number',
      inputs: [
        {
          name: 'room',
          type: 'text',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          id: 'confirm-button',
          handler: (e) => {
            this.groupNumber$.next(e.room)
          }
        }
      ]
    });

    await alert.present();
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

  async deleteAllMessages() {
    const alert = await this.alertController.create({
      header: 'Delete all messages in this room.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
        }, {
          text: 'Okay',
          id: 'confirm-button',
          handler: (e) => {
            this.chatListRef.remove()
          }
        }
      ]
    });

    await alert.present();
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
