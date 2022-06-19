import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  c: boolean = true
  o: boolean = false
  a: boolean = false
  l: boolean = false

  constructor() { }

  ngOnInit(): void {
  }
  customer() {
    this.c = true
    this.o = false
    this.l=false
    this.a=false
  }
  orders() {
    this.c = false
    this.l=false
    this.a=false
    this.o = true
  }
  about() {
    this.c = false
    this.l=false
    this.o = false
    this.a = true
  }
  login() {
    this.c = false
    this.o = false
    this.a=false
    this.l = true
  }
}
