import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';
import {GALLERY_CONF, GALLERY_IMAGE, NgxImageGalleryComponent} from 'ngx-image-gallery';
import {DEMO_GALLERY_CONF_INLINE, DEMO_GALLERY_IMAGE} from './index';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public showConf: boolean = true;

  @ViewChild('ngxImageGallery') ngxImageGallery: NgxImageGalleryComponent;

  title = 'Demo App';

  // gallery configuration
  conf: GALLERY_CONF = DEMO_GALLERY_CONF_INLINE;

  // gallery images
  images: GALLERY_IMAGE[] = DEMO_GALLERY_IMAGE;

  // METHODS
  // open gallery
  openGallery(index: number = 0) {
    // console.log(this.ngxImageGallery);
    // this.ngxImageGallery.open(index);
  }

  // close gallery
  closeGallery() {
    // this.ngxImageGallery.close();
  }

  // set new active(visible) image in gallery
  newImage(index: number = 0) {
    // this.ngxImageGallery.setActiveImage(index);
  }

  // next image in gallery
  nextImage() {
    this.ngxImageGallery.next();
  }

  // prev image in gallery
  prevImage() {
    this.ngxImageGallery.prev();
  }

  /**************************************************/

  // EVENTS
  // callback on gallery opened
  galleryOpened(index) {
    console.log('Gallery opened at index ', index);
  }

  // callback on gallery closed
  galleryClosed() {
    console.log('Gallery closed.');
  }

  // callback on gallery image clicked
  galleryImageClicked(index) {
    console.log('Gallery image clicked with index ', index);
    // this.ngxImageGallery.open(index);
  }

  // callback on gallery image changed
  galleryImageChanged(index) {
    console.log('Gallery image changed to index ', index);
  }

  // callback on user clicked delete button
  deleteImage(index) {
    console.log('Delete image at index ', index);
  }

  ngOnInit(): void {
  }

  /*galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];


  @Input() prevDisabled: boolean;
  @Input() nextDisabled: boolean;
  @Input() arrowPrevIcon: string;
  @Input() arrowNextIcon: string;

  @Output() onPrevClick = new EventEmitter();
  @Output() onNextClick = new EventEmitter();



  ngOnInit(): void {

    this.galleryOptions = [
      {
        width: '600px',
        height: '600px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        previewFullscreen: true,
        previewCloseOnEsc: true,
        previewCloseOnClick: true
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/IMGL0035.jpg',
        medium: 'assets/images/IMGL0035.jpg',
        big: 'assets/images/IMGL0035.jpg'
      },
      {
        small: 'assets/images/IMGL0036.jpg',
        medium: 'assets/images/IMGL0036.jpg',
        big: 'assets/images/IMGL0036.jpg'

      },
      {
        small: 'assets/images/IMGL0037.jpg',
        medium: 'assets/images/IMGL0037.jpg',
        big: 'assets/images/IMGL0037.jpg'
      },
      {
        small: 'assets/images/IMGL0037.jpg',
        medium: 'assets/images/IMGL0037.jpg',
        big: 'assets/images/IMGL0037.jpg'
      },
      {
        small: 'assets/images/IMGL0037.jpg',
        medium: 'assets/images/IMGL0037.jpg',
        big: 'assets/images/IMGL0037.jpg'
      },
      {
        small: 'assets/images/IMGL0037.jpg',
        medium: 'assets/images/IMGL0037.jpg',
        big: 'assets/images/IMGL0037.jpg'
      },
      {
        small: 'assets/images/IMGL0036.jpg',
        medium: 'assets/images/IMGL0036.jpg',
        big: 'assets/images/IMGL0036.jpg'

      }
    ];
  }


  handlePrevClick(): void {
    this.onPrevClick.emit();
  }

  handleNextClick(): void {
    this.onNextClick.emit();
  }
*/
}
