import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  result: string='';
  pointsUser = 0;
  pointsComp =  0;

  ngOnInit(): void {
    this.result = 'Esperando jugada...';
  }
}