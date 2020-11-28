import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.scss']
})
export class UserSettingComponent implements OnInit {
userForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11)])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      State: new  FormControl('' , Validators.required),
      city: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      profileImage: new FormControl('', Validators.required)
    });

  }
  onSubmit(x:any){

  }
  onUpload(uplod:any){

  }
}
