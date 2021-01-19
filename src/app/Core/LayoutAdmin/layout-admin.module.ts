import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LayoutAdminRoutingModule} from './layout-admin-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MatButtonModule, MatIconModule, MatListModule, MatRadioModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {ContentdashboardComponent} from './contentdashboard/contentdashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {QuillModule} from 'ngx-quill';
import {DpDatePickerModule} from 'ng2-jalali-date-picker';
import {NewpaperComponent} from './paper/newpaper/newpaper.component';
import {PaperlistComponent} from './paper/paperlist/paperlist.component';
import {NewteacherComponent} from './teacher/newteacher/newteacher.component';
import {TeacherlistComponent} from './teacher/teacherlist/teacherlist.component';
import {NewcoursesComponent} from './Courses/newcourses/newcourses.component';
import {ListcoursesComponent} from './Courses/listcourses/listcourses.component';
import { UserslistComponent } from './users/userslist/userslist.component';
import { EposideComponent } from './Eposide/eposide/eposide.component';
import {SharedModule} from '../../SharedModule/shared.module';


@NgModule({
  declarations: [ DashboardComponent, ContentdashboardComponent, NewpaperComponent, PaperlistComponent, NewteacherComponent, TeacherlistComponent, NewcoursesComponent, ListcoursesComponent, UserslistComponent, EposideComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    LayoutAdminRoutingModule,
    MatButtonModule,
    MatRadioModule,
    ReactiveFormsModule,
    DpDatePickerModule,
    QuillModule.forRoot(),
    FormsModule,
    SharedModule
  ],

  exports: [DashboardComponent]
})
export class LayoutAdminModule {
}
