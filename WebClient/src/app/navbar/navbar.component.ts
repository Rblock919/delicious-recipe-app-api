import { Component, OnInit, Inject } from '@angular/core';
import { TOASTR_TOKEN, Toastr} from '../common/toastr.service';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public session: SessionService,
    @Inject(TOASTR_TOKEN) private toastr: Toastr,
    private router: Router) {
  }

  logout() {
    if (this.session.logout()) {
      if (this.session.isAdmin) {
        this.session.unsetAdminStatus();
      }
      this.toastr.success('You have successfully logged out');
      this.router.navigate(['logout']);
    }
  }

  ngOnInit() {
  }

}
