import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  items: {id: number, name: string}[] = [{id: 1, name: "Test1"}, {id: 2, name: "Test2"}]

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  buttonClick(item: {id: number, name: string}) {
    this.router.navigate(['detail'], {relativeTo: this.route})
  }
}
