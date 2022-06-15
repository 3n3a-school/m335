import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/compat/database';
import { ChatMessage } from '../_types/chat';
import { Router } from '@angular/router';


@Component({
    selector: 'app-chat',
    templateUrl: './chat.page.html',
    styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

    groupNumber: string = 'G6'
    chatRef: AngularFireList<ChatMessage[]>
    chatList: Observable<ChatMessage[][]>

    constructor(
        private router: Router,
        private afDb: AngularFireDatabase
    ) {
        this.chatRef = afDb.list(`/chats/${this.groupNumber}`)
        this.chatList = this.chatRef.valueChanges()
    }
    ngOnInit() {}
}
