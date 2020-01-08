import { Injectable } from '@angular/core';
import { of } from "rxjs";

export interface user {
  id: number;
  firstName: string;
  secondName: string;
  photo: string;
  team: number;
  birthDate: string;
  age: number;
};

export interface porject {
  id: number;
  photo: string;
  name: string;
  whereImplemented: string;
  acronym?: string;
  userId: number;
  status: boolean;
};

@Injectable({
  providedIn: 'root'
})

export class AppTreeService {

  public users: Array<user> = [
    {
      id: 1,
      firstName: "Israel",
      secondName: "Murillo",
      photo: "",
      team: 1,
      birthDate: "1979/10/22",
      age: 40
    },
    {
      id: 2,
      firstName: "Roberto", 
      secondName: "Gomez",
      photo: "",
      team: 1,
      birthDate: "1979/10/22",
      age: 40
    }
  ];

  public projects: Array<porject> = [
    {
      id: 1,
      photo: "inf1.jpg",
      name: "MOSPA",
      whereImplemented: "bolivia",
      status: true,
      acronym: "mospa",
      userId: 1
    },
    {
      id: 1,
      photo: "",
      name: "Sigah",
      whereImplemented: "Honduras",
      status: true,
      acronym: "mospa",
      userId: 1
    },
    {
      id: 1,
      photo: "",
      name: "firulais",
      whereImplemented: "Bolivia",
      status: false,
      acronym: "firulais",
      userId: 1
    },
    {
      id: 1,
      photo: "",
      name: "Sigah",
      whereImplemented: "Honduras",
      status: true,
      acronym: "mospa",
      userId: 2
    }
  ];
 
  constructor() { }

  public getUsers() {
    return of(this.users);
  }
  public getProjects(idUser: number) {
    return of(this.projects.filter(project => {
      return project.userId == idUser; 
    }));
  }

}
