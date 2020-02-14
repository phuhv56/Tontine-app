import { User } from './../../core/models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  cols: any[];
  users: User[];
  constructor() { }

  ngOnInit() {
    this.cols = [
			{ field: 'id', header: 'Mã' },
			{ field: 'fullName', header: 'Họ tên' },
			{ field: 'userName', header: 'Tài khoản' },
			{ field: 'phone', header: 'Số điện thoại' },
		];

		this.users = [
			{
				"id": 1,
				"fullName": "Hồ Văn Phú",
				"userName": "phuhv",
				"phone": "0386714792"
			},
			{
				"id": 2,
				"fullName": "Hoàng Thị Thúy Hằng",
				"userName": "hanghtt",
				"phone": "0963566027"
			}
		]
  }

}
