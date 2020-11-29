import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public userData: any;
  public userToken: any;
  public userJson: any;
  public userType: any;

  constructor() {

  }

  saveCurrentUser(data: any) {
    localStorage.setItem('currentUserHD', data);
    console.log(data)
  }

  getCurrentUser(): boolean {
    this.userData = localStorage.getItem('currentUserHD');
    console.log(localStorage.getItem('currentUserHD'))
    this.userJson = JSON.parse(this.userData);
    if (this.userData !== undefined && this.userData !== null) {
      this.userJson = JSON.parse(this.userData);
      return true;
    } else {
      return false;
    }
  }

  removeCurrentUser(): void {
    // alert('del');
    localStorage.removeItem('currentUser');

  }
}
