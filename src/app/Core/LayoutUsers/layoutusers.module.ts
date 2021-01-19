import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutUsersRoutingModule } from './layoutusers-routing.module';
import {DashboardComponent} from './dashboardUser/dashboard.component';
import {MatButtonModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {AccordionModule} from 'primeng/accordion';


import { CounteruserComponent } from './counteruser/counteruser.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { MyPurchasesComponent } from './my-purchases/my-purchases.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { MySalesComponent } from './my-sales/my-sales.component';
import { TransactionsComponent } from './Financial/transactions/transactions.component';
import { ReportsComponent } from './Financial/reports/reports.component';
import { SubscriberAffairsComponent } from './system/subscriber-affairs/subscriber-affairs.component';
import { SupportTicketComponent } from './system/support-ticket/support-ticket.component';
import { UserAccountComponent } from './Account-Settings/user-account/user-account.component';
import { UserSettingComponent } from './user-setting/user-setting.component';
import {ToastModule} from 'primeng/toast';
import {QuillModule} from 'ngx-quill';
import {ReactiveFormsModule} from '@angular/forms';
import {LayoutModule} from '../../layout/layout.module';
import { CourseComponent } from './course/course.component';
import {TableModule} from 'primeng/table';
import { BankAccountComponent } from './Account-Settings/bank-account/bank-account.component';
import { MastercourseComponent } from './mastercourse/mastercourse.component';
import {SharedModule} from '../../SharedModule/shared.module';






@NgModule({
  declarations: [
    DashboardComponent,
    CounteruserComponent,
    MyProductsComponent,
    MyPurchasesComponent,
    MyCoursesComponent,
    MySalesComponent,
    TransactionsComponent,
    ReportsComponent,
    SubscriberAffairsComponent,
    SupportTicketComponent,
    UserAccountComponent,
    UserSettingComponent,
    CourseComponent,
    BankAccountComponent,
    MastercourseComponent],
  imports: [
    CommonModule,
    LayoutUsersRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    AccordionModule,
        MatButtonModule,
        ToastModule,
       QuillModule,
        ReactiveFormsModule,
    LayoutModule,
    TableModule,
    SharedModule


  ]
})
export class LayoutusersModule { }
