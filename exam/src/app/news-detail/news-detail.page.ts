import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsDetailService } from '../_services/news-detail.service';
import { NewsMessage } from '../_types/news';

@Component({
    selector: 'app-news-detail',
    templateUrl: './news-detail.page.html',
    styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {
    newsdetail: NewsMessage;

    constructor(private newsMsgService: NewsDetailService, private router: Router) {
        this.newsdetail = newsMsgService.getNewsMessageDetail()
    }

    ngOnInit() {}

        
    gotoNewsPage() {
        this.router.navigate(['news'])
    }

    doShare(newsDetail: NewsMessage) {
        let mailtoUrl = `mailto:?to=&subject=${encodeURIComponent(newsDetail.titel)}`
        window.open(mailtoUrl, '_blank')
    }
}
