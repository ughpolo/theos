import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reisehinweise',
  templateUrl: './reisehinweise.component.html',
  styleUrls: ['./reisehinweise.component.scss']
})
export class ReisehinweiseComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  route(beitrag: any) {
    this.router.navigateByUrl(`/reisehinweise/${beitrag}`)
  }

}
