import {Component} from '@angular/core';
import {ImageService} from './images/image.service';
import { ajax } from 'rxjs/observable/dom/ajax';
import { fromEvent } from 'rxjs/observable/fromEvent';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public images;
    public buttonShowHide = '';
    public popupImageSrc = '';
    public transitionScale = '';
    private limit = 9;

    constructor(private _imageService: ImageService) {
    }

    ngOnInit() {
        this.getImages(this.limit);
        this.buttonClick();
    }

    getImages(limit) {
        // const apiData = ajax('https://jsonplaceholder.typicode.com/photos?_start=4970&_limit=' + limit);
        const apiData = ajax('https://jsonplaceholder.typicode.com/photos?_limit=' + limit);
        apiData.subscribe(res => {
            this.images = res.response;
            if(limit > res.response.length) {
                this.buttonShowHide = 'hide';
            }
        });
    }

    buttonClick() {
        let buttonUpload = document.getElementById('button-upload');
        let buttonClick = fromEvent(buttonUpload, 'click');
        buttonClick.subscribe(() => {
            this.limit = this.limit + 9;
            this.getImages(this.limit);
        });
    }

    showPopupImage(url) {
        this.popupImageSrc =  url;
        window.scroll(0,0);
        this.transitionScale = 'transition-scale';
    }

    closePopup() {
        this.transitionScale = '';
    }
}
