import {Component, Input} from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';
import {AppComponent} from "../app.component";

@Component({
    selector: 'images-c',
    template: '<img (click)="showPopupImage($event, image.url)" class="image-one" src="{{ image.thumbnailUrl }}">',
    styleUrls: ['../app.component.css']
})
export class ImagesComponent {
    @Input() image;

    constructor(private app: AppComponent ) { }

    ngOnInit() {
        // this.showPopupImage();
    }

    showPopupImage(event, url) {
        this.app.showPopupImage(url);
    }
}
