import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  //Using ngIf to toggle text display
  showText: boolean = false;

  toggleText() {
    this.showText = !this.showText;
  }
  staff = [ 
    { firstName: 'April', lastName: 'Gomez', email: 'april.gomez@test.com', role: 'User' },   
    { firstName: 'Arvin', lastName: 'Cruz', email: 'arvin.cruz@test.com', role: 'Admin' }, 
    { firstName: 'Rafael', lastName: 'Tayag', email: 'rafael.tayag@test.com', role: 'Admin' }, 
    { firstName: 'Owen', lastName: 'Bondoc', email: 'owen.bondoc@test.com', role: 'User' }, 
    { firstName: 'Clarence', lastName: 'Reyes', email: 'clarence.reyes@test.com', role: 'User' } 
    ];
}