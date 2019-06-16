import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { IUser } from 'src/app/models/user.model';
import { TOASTR_TOKEN, Toastr } from '../../common/toastr.service';

@Component({
  selector: 'app-edit-user-list',
  templateUrl: './edit-user-list.component.html',
  styleUrls: ['./edit-user-list.component.scss']
})
export class EditUserListComponent implements OnInit {

  userList: IUser[];
  updatedUserList: IUser[];
  editedAdminFields: boolean[];
  differentFromOriginal = false;

  constructor(private adminService: AdminService,
              @Inject(TOASTR_TOKEN) private toastr: Toastr
              ) { }

  ngOnInit() {
    this.editedAdminFields = [];
    this.adminService.getUsers().subscribe(users => {
      this.userList = users;
      let counter = 0;
      this.userList.forEach(user => {
        this.editedAdminFields.push();
        this.editedAdminFields[counter] = user.isAdmin;
        counter++;
      });
    }, err => {
      console.log('error getting user list: ' + err);
    });
  }

  changeStatus(user: IUser): void {
    const index = this.userList.indexOf(user);
    this.editedAdminFields[index] = !this.editedAdminFields[index];
    this.calcDiff();
  }

  calcDiff(): void {
    this.differentFromOriginal = false;
    let counter = 0;
    while (counter < this.userList.length) {
      if (this.editedAdminFields[counter] !== this.userList[counter].isAdmin) {
        this.differentFromOriginal = true;
      }
      counter++;
    }
  }

  submit(): void {
    this.updatedUserList = [];
    // TO-DO: 1. Make and envoke updateUsers api call 2. Updated editedAdminField array
    //                                                  & diferentFromOriginal variable
    let counter = 0;
    let counter2 = 0;

    this.userList.forEach(user => {
      if (user.isAdmin !== this.editedAdminFields[counter]) {
        this.updatedUserList.push(user);
        this.updatedUserList[counter2].isAdmin = this.editedAdminFields[counter];
        counter2++;
      }
      counter++;
    });

    this.adminService.updateUsers(this.updatedUserList).subscribe(res => {
      console.log('res: ' + res);
      this.toastr.success('Users Successfully Updated!');
      this.differentFromOriginal = false;
      let counter3 = 0;
      this.editedAdminFields = [];
      this.userList.forEach(user => {
        this.editedAdminFields.push();
        this.editedAdminFields[counter3] = user.isAdmin;
        counter3++;
      });
    }, err => {
      console.log('err: ' + err);
      this.toastr.error('Error Updating Users');
    });
    console.log('submitted userList: ' + JSON.stringify(this.updatedUserList));
  }

}