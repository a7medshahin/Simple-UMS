import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { User } from './../../models/user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  form: FormGroup;
  updatedUser: User;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<UserEditComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.updatedUser = data;
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: [this.updatedUser.name, []],
      email: [this.updatedUser.email, []],
      phone: [this.updatedUser.phone, []]
    });
  }
  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}
