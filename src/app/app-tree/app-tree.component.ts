import { Component, OnInit } from '@angular/core';
import { AppTreeService } from "../app-tree.service";
@Component({
  selector: 'app-tree',
  templateUrl: './app-tree.component.html',
  styleUrls: ['./app-tree.component.scss']
})
export class AppTreeComponent implements OnInit {

  public users;
  public mostrarProjectos: boolean = false;
  public userId: number;

  constructor(public appTreeService: AppTreeService) { }

  ngOnInit() {
    this.appTreeService.getUsers().subscribe(data => {
      this.users = data;
    })
  }

}
