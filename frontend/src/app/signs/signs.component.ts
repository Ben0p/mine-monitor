import { Component, OnInit, OnDestroy  } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-signs',
  templateUrl: './signs.component.html',
  styleUrls: ['./signs.component.scss']
})

export class SignsComponent implements OnInit, OnDestroy {

  alerts$: Object;
  interval: any;
  signedIn: boolean;

  constructor(
    private data: DataService,
    private router: Router,
    private authenticationService: AuthenticationService
    ) { }

  toggle (content) {
    window.open("http://root:00000000@"+content, "_blank");
  }


  ngOnInit() {
    this.refreshData();
    this.interval = setInterval(() => { 
      this.refreshData(); 
    }, 5000);

    let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    if (currentUser !== null) {
      this.signedIn = true
    } else {
      this.signedIn = false
    }

  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  refreshData() {
    this.data.getAlerts().subscribe(
      data => this.alerts$ = data
    );
    console.log(this.alerts$)
  }

  logout() {
    this.authenticationService.logout();
    window.location.reload();
  }

}
