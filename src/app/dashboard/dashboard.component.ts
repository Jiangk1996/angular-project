import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @Input() msg = '';
  @Output() changeColorRes = new EventEmitter<Boolean>();
  isRed = false;
  changeColor() {
    this.isRed = !this.isRed;
    this.changeColorRes.emit(this.isRed);
  }

  constructor() {}

  ngOnInit(): void {
    console.log(1);
  }
}
