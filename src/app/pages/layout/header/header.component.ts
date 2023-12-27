import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) {

  }

  ngOnInit(): void {

  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/login'])
  }

}
