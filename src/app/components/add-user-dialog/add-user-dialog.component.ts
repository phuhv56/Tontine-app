import {User} from './../../core/models/user';
import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {UserService} from '../../core/services/user.service';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.css']
})
export class AddUserDialogComponent implements OnInit, OnChanges {
  cols: any[];
  users: User[];
  selectedUsers: User[];
  @Input() change: string;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.cols = [
      {field: 'id', header: 'Mã'},
      {field: 'fullName', header: 'Họ tên'},
      {field: 'userName', header: 'Tài khoản'},
      {field: 'phone', header: 'Số điện thoại'},
    ];
    this.loadData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.change) {
      console.log('Simple on change');
    }
  }

  loadData() {
    this.userService.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }

  addUserToTontine() {
    console.log(this.selectedUsers.length);
  }
}
