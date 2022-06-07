import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.page.html',
  styleUrls: ['./image-viewer.page.scss'],
})
export class ImageViewerPage implements OnInit {

  item: {description: string, name: string, src: string} = {description: "Thsi is a random test image", name: "Image", src: "https://source.unsplash.com/random.jpg"}

  constructor() { }

  ngOnInit() {
  }

}
