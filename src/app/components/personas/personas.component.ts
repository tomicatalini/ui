import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/service/personas.service';
import { Persona } from 'src/app/model/persona';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personasList: Persona[];

  constructor(
    private personasService: PersonasService
  ) { }

  ngOnInit(): void {
    this.getAllPersonas();
  }

  getAllPersonas(): void {
    this.personasService.findAll().subscribe( (response: any) => {
      this.personasList = response as Persona[];
    })
  }

}
