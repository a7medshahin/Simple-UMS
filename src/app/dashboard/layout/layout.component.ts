import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  type: string;
  constructor(private authService: AuthService, private router: Router ) {
    if (this.authService.isAuthenticated() !== '') {
      this.router.navigate(['/dashboard/' + this.authService.isAuthenticated()]);
      this.type = this.authService.isAuthenticated();

    }
  }
  ngOnInit() {
  }
  logout() {
    localStorage.setItem('role', '');
    this.router.navigate(['/login']);

  }

}
