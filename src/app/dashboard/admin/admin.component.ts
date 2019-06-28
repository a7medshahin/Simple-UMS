import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { GetUsersService } from './../../services/get-users.service';
import { User } from './../../models/user.model';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

// dialoug component
import { UserEditComponent } from './../user-edit/user-edit.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  users: User[];
  userSearch: 'All';
  page: 0;
  constructor(private authService: AuthService, private router: Router, private userService: GetUsersService,
    private toastr: ToastrService, private dialog: MatDialog) {
    if (this.authService.isAuthenticated() !== '' && this.authService.isAuthenticated() !== 'user') {
      this.router.navigate(['/dashboard/' + this.authService.isAuthenticated()]);
    }
  }

  ngOnInit() {
    // get all users
    this.userService.getJSON().subscribe(
      data => {
        this.users = data.users;
      },
      err => console.log(err)
    );
  }
  deleteUser(id) {
    this.users = this.users.filter(user => user.id !== id);
    this.toastr.success('User deleted');
  }
  // open edit dialog of user edit component
  openDialog(user) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';
    dialogConfig.height = '400px';
    dialogConfig.data = user;

    const dialogRef = this.dialog.open(UserEditComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {
          const tempUser = user;
          // update the user info except id and status
          user = {
            ...data,
            id: tempUser.id,
            status: tempUser.status,
          };
          const index = this.users.findIndex((el) => el.id === tempUser.id);
          // find the index of the updated user in the array
          if (index === -1) {
            // this.users.push(user); // add user
          } else {
            this.users[index] = user; // update user
            this.toastr.success(user.name + ' info updated');
          }
        }
      }
    );
  }

}
