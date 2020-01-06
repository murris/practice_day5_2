import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { AppTreeService, porject } from "../app-tree.service";

@Component({
  selector: 'app-second-child-component',
  templateUrl: './second-child-component.component.html',
  styleUrls: ['./second-child-component.component.scss']
})
export class SecondChildComponentComponent implements OnInit {
  @Input() public idUser: number;

  public proyectos: Array<porject> = [];

  constructor(public appTreeService: AppTreeService) { }

  ngOnInit() {
    this.carga();
  }

  ngOnChanges(): void {
    this.carga();
  }

  carga() {
    this.appTreeService.getProjects(this.idUser).subscribe(projects => {
      this.proyectos = projects;
    });
  }

}
