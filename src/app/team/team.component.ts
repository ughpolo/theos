import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currentSelected!: string;

  showText(name: string, target: any) {
    this.currentSelected = name;
    setTimeout(() => {
      this.scrollToTarget(target);
    }, 20)
    console.log("yo");

  }

  scrollToTarget(target: any) {
    target.scrollIntoView({
      behavior: "smooth"
    })
  }

}
