import { Component, OnInit } from '@angular/core';
import { LocalNotifications } from "@capacitor/local-notifications";

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.page.html',
  styleUrls: ['./notifier.page.scss'],
})
export class NotifierPage implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  async createNotification() {
    let nto = await LocalNotifications.schedule({
      notifications: [
        {
          title: 'Test',
          body: 'Test',
          id: 1,
          sound: null,
          attachments: null,
          actionTypeId: '',
          extra: null,
        }
      ]
    })
  }

}
