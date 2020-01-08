import { Component, OnInit, Input } from '@angular/core';
import { user } from "../app-tree.service";

@Component({
  selector: 'first-child-component',
  templateUrl: './first-child-component.component.html',
  styleUrls: ['./first-child-component.component.scss']
})
export class FirstChildComponentComponent implements OnInit {

  @Input('user') public user: user;

  constructor() { }

  ngOnInit() {
  }

}
