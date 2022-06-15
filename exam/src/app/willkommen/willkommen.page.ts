import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../_services/storage.service';

import SwiperCore, { Pagination } from 'swiper';

SwiperCore.use([Pagination])

@Component({
    selector: 'app-willkommen',
    templateUrl: './willkommen.page.html',
    styleUrls: ['./willkommen.page.scss'],
})
export class WillkommenPage implements OnInit {
    constructor(private storageService: StorageService, private router: Router) {}

    ngOnInit() {}

    continueToLogin() {
        this.welcomeDone()
        this.router.navigate(['login'])
    }

    async welcomeDone() {
    await this.storageService.set('WelcomeDone', true);
    }
}
