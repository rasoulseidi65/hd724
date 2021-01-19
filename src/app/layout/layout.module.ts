import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LayoutRoutingModule} from './layout-routing.module';



import {CommentComponent} from './comment/comment.component';
import {FilmComponent} from './film/film.component';

import {HeaderComponent} from './header/header.component';
import {IndexComponent} from './index/index.component';
import {TopMenuComponent} from './top-menu/top-menu.component';
import {CenterMenuComponent} from './center-menu/center-menu.component';
import {MenuComponent} from './menu/menu.component';
import {FooterComponent} from './footer/footer.component';
import {ArticleComponent} from './article/article.component';
import { CartComponent } from './cart/cart.component';
import {MatStepperModule} from '@angular/material/stepper';
import {ReactiveFormsModule} from '@angular/forms';;
import { CooperationComponent } from './cooperation/cooperation.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import { AllCantentComponent } from './film/all-cantent/all-cantent.component';
import { MostDownloadsComponent } from './film/most-downloads/most-downloads.component';
import { MostPopularContentComponent } from './film/most-popular-content/most-popular-content.component';
import { HottestContentComponent } from './film/hottest-content/hottest-content.component';





@NgModule({
  declarations: [IndexComponent, HeaderComponent, CommentComponent
    , FilmComponent, ArticleComponent, TopMenuComponent, CenterMenuComponent,MenuComponent,FooterComponent, CartComponent, CooperationComponent, AllCantentComponent, MostDownloadsComponent, MostPopularContentComponent, HottestContentComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatStepperModule,
    ReactiveFormsModule,
    CarouselModule,


  ],
  exports: [IndexComponent,
    HeaderComponent,
    FilmComponent, ArticleComponent, CommentComponent, TopMenuComponent, CenterMenuComponent,MenuComponent,FooterComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class LayoutModule {
}
