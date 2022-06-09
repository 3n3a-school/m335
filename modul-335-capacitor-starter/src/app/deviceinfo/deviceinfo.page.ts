import { Component, OnInit } from '@angular/core';
import { Device } from "@capacitor/device";

interface DeviceInfo {

}

@Component({
  selector: 'app-deviceinfo',
  templateUrl: './deviceinfo.page.html',
  styleUrls: ['./deviceinfo.page.scss'],
})
export class DeviceinfoPage implements OnInit {

  info: DeviceInfo;

  constructor() { }

  async ngOnInit() {
  }

  private getInfo(): DeviceInfo {
    {
      
    }
  }

}
