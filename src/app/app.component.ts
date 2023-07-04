import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    let users= 
    [
      {"username":"user","password":"user","role":"user"},
      {"username":"admin","password":"admin","role":"admin"}
    ];

    localStorage.setItem("users",JSON.stringify(users));
  }
  title = 'ecommerce';
}
