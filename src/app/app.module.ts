import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import {NgxGalleryModule} from 'ngx-gallery';
import {NgxImageGalleryModule} from 'ngx-image-gallery';
import {MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatListModule, MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { KeysPipe } from './Pipes/keys.pipe';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    KeysPipe,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    NgxGalleryModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    NgxImageGalleryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
