import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { TOASTR_TOKEN, Toastr} from '../shared/toastr.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  searchString: string;

  constructor(
    public session: SessionService,
    @Inject(TOASTR_TOKEN) private toastr: Toastr,
    private auth: AuthService,
    private router: Router) {
  }

  ngOnInit() {
    this.searchString = '';
  }

  search() {
    if (this.searchString !== '') {
      console.log('user has actually entered something to search \nSearching...');
      this.router.navigate(['recipe/search', this.searchString]);
    } else {
      console.log('nothing to search...');
    }
  }

  logout() {
    if (this.session.logout()) {
      if (this.session.isAdmin) {
        this.session.setAdminStatus(false);
      }
      this.toastr.success('You have successfully logged out');
      this.router.navigate(['logout']);
    }
    this.clearSearch();
  }

  getUserData() {
    this.auth.getUserData().subscribe(res => {
      console.log('RES FROM GET USERDATA: ' + JSON.stringify(res));
    });
  }

  clearSearch(): void {
    this.searchString = '';
  }

}
