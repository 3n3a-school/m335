import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-grid-gallery',
  templateUrl: './grid-gallery.page.html',
  styleUrls: ['./grid-gallery.page.scss'],
})
export class GridGalleryPage implements OnInit {

  photos: { webviewPath: string }[] = [
    { webviewPath: "https://source.unsplash.com/random" }, 
    { webviewPath: "https://source.unsplash.com/random" }, 
    { webviewPath: "https://source.unsplash.com/random" }, 
    { webviewPath: "https://source.unsplash.com/random" },
    { webviewPath: "https://source.unsplash.com/random" },
    { webviewPath: "https://source.unsplash.com/random" },
    { webviewPath: "https://source.unsplash.com/random" },
    { webviewPath: "https://source.unsplash.com/random" },
    { webviewPath: "https://source.unsplash.com/random" },
    { webviewPath: "https://source.unsplash.com/random" },
  ]

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  imageClick(photo) {
    this.router.navigate(["view"], {relativeTo: this.route})
  }

}
