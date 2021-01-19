import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {LayoutModule} from '../layout/layout.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material';
import {SharedModule} from '../SharedModule/shared.module';
import {CaptchaModule} from 'primeng/captcha';




@NgModule({
  declarations: [LoginComponent,RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
    MatRadioModule,
    FormsModule,
    SharedModule,
    CaptchaModule
  ],

})
export class AuthModule { }
