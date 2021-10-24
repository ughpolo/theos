import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  hasRoute(route: string): boolean {
    return this.router.url.includes(route);
  }
  open = false;

  close() {
    this.sidenav.close();
  }
  toggleNav() {
    this.open = !this.open;
  }
}
