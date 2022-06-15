import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsDetailService } from '../_services/news-detail.service';
import { NewsMessage } from '../_types/news';
import { Observable } from 'rxjs';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
    selector: 'app-news',
    templateUrl: './news.page.html',
    styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

    newsRef: AngularFireList<NewsMessage[]>
    newsList: Observable<NewsMessage[][]>

    constructor(
        private router: Router,
        private newsMsgService: NewsDetailService,
        private afDb: AngularFireDatabase
    ) {
        this.newsRef = afDb.list(`/news`)
        this.newsList = this.newsRef.valueChanges()
    }

    ngOnInit() {}

    openDetailNews(newsMsg: NewsMessage) {
        this.newsMsgService.setNewsMessageDetail(newsMsg)
        this.router.navigate(['news-detail'])
    }

}
