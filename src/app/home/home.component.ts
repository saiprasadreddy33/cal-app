import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,state,
  style,
  animate,
  transition,
  query,
  stagger,
  keyframes,
} from '@angular/animations';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2000ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
    trigger('fadeInDelay', [
      state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate(
          '2500ms 500ms ease-in',
          style({ opacity: 1 })
        ),
      ]),
    ]),
    trigger('bounceIn', [
      state('hover', style({ transform: 'scale(1.1)', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)' })),
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),
        animate(
          '1000ms ease-in-out',
          keyframes([
            style({ transform: 'scale(1.2)', opacity: 1, offset: 0.5 }),
            style({ transform: 'scale(1)', opacity: 1, offset: 1 }),
          ])
        ),
      ]),
    ]),
    trigger('buttonHover', [
      transition(':enter', []),
      transition(':hover', [
        animate(
          '200ms ease-in',
          style({
            transform: 'scale(1.1)',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
          })
        ),
      ]),
    ]),
  ],
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToCalendar() {
    this.router.navigate(['/calendar']);
  }
}
