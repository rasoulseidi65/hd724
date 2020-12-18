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
import {GalleriaModule} from 'primeng/galleria';
import {AccordionModule, ButtonModule, CardModule, InputTextareaModule, OrderListModule, PanelModule, SharedModule} from 'primeng/primeng';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {ArticleComponent} from './article/article.component';
import { CartComponent } from './cart/cart.component';
import {MatStepperModule} from '@angular/material/stepper';
import {ReactiveFormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';


@NgModule({
  declarations: [IndexComponent, HeaderComponent, CommentComponent
    , FilmComponent, ArticleComponent, TopMenuComponent, CenterMenuComponent,MenuComponent,FooterComponent, CartComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    GalleriaModule,
    SharedModule,
    ButtonModule,
    CarouselModule,
    CardModule,
    MatStepperModule,
    InputTextareaModule,
    OrderListModule,
    PanelModule,
    ReactiveFormsModule,
    TableModule,
    AccordionModule,
    ToastModule
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
