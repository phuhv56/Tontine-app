import { User } from './../../core/models/user';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-add-user-dialog',
	templateUrl: './add-user-dialog.component.html',
	styleUrls: ['./add-user-dialog.component.css']
})
export class AddUserDialogComponent implements OnInit {
	cols: any[];
	users: User[];
	selectedUsers: User[];

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


	AddUserToTontine() {
		console.log(this.selectedUsers.length);
	}
}
