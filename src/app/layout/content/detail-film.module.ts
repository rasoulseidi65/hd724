import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailFilmRoutingModule } from './detail-film-routing.module';
import {ContentArchiveComponent} from './content-archive/content-archive.component';
import {ContentBodyComponent} from './content-body/content-body.component';
import {ContentCommentsComponent} from './content-comments/content-comments.component';
import {ContentComponent} from './content.component';
import {LayoutModule} from '../layout.module';


@NgModule({
  declarations: [ContentArchiveComponent,ContentBodyComponent,ContentCommentsComponent,ContentComponent],
  imports: [
    CommonModule,
    DetailFilmRoutingModule,
    LayoutModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class DetailFilmModule { }
