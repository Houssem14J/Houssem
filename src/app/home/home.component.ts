import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  search:any;
  clicked = false;
  constructor() { }

  ngOnInit() {
  }
  getSearch(event) {
    this.search = event;
    console.log(this.search);
    this.clicked = !this.clicked;
  }
}
