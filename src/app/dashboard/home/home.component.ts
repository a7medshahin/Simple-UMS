import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { GetUsersService } from './../../services/get-users.service';
import { User } from './../../models/user.model';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig } from '@angular/material';

// dialoug component
import { UserEditComponent } from './../user-edit/user-edit.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: User[];
  p: 1;
  constructor(private authService: AuthService, private router: Router, private userService: GetUsersService,
    private toastr: ToastrService, private dialog: MatDialog ) {
    if (this.authService.isAuthenticated() !== '' && this.authService.isAuthenticated() !== 'user') {
      this.router.navigate(['/dashboard/' + this.authService.isAuthenticated()]);
    }
   }

  ngOnInit() {
    this.userService.getJSON().subscribe(
      data => {
        this.users = data.users;
      },
      err => console.log(err)
    );
  }

}
