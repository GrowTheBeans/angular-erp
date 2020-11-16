import { Component, OnInit } from '@angular/core';
import { transition, animate, trigger, state, style } from '@angular/animations';

@Component({
  selector: 'app-core-animation',
  templateUrl: './animation.component.html',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  styleUrls: ['./animation.component.scss']
})
export class AnimationComponent implements OnInit {

  isOpen = true;
  
  constructor() { }

  ngOnInit(): void {
  }
  toggle() {
    this.isOpen = !this.isOpen;
  }
}
