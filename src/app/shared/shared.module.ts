import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({

  declarations: [
    CarouselComponent
  ],

  imports: [
    CommonModule,
    TranslateModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
  ],
  exports: [
    TranslateModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselComponent
  ],
})

export class SharedModule {

  static forRoot() {
    return {
      ngModule: SharedModule,
    };
  }
}