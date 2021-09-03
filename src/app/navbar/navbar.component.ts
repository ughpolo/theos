import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  hasRoute(route: string): boolean {
    return this.router.url.includes(route);
  }
  open = false;


  toggleNav() {
    this.open = !this.open;
  }
}
