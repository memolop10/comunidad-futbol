import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginaprincipal',
  templateUrl: './paginaprincipal.component.html',
  styleUrls: ['./paginaprincipal.component.css']
})
export class PaginaprincipalComponent implements OnInit {

  jugar:boolean;
  eventos:boolean;
  quienes:boolean;

  constructor() { }

  ngOnInit() {
  }

}
