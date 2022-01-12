import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
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
    

  }

  scrollToTarget(target: any) {
    target.scrollIntoView({
      behavior: "smooth"
    })
  }

}
