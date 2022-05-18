import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';

import { FormBase } from '../model/FormBase';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  formStructure: [];

  constructor() { } 

  getStructure(ClassType: String ){
    //Se pide al back la estructura o como esta conformoda la clase con los datos necesarios

    const structure: FormBase<string>[] = 
     [
      {
        field: 'nombre',
        class: 'Persona',
        label: 'Nombre',
        controlType: 'input',
        type: 'text',
        required: true,
        order: 1,
        group: 'persona',
        options: []
      },
      {
        "field": "apellido",
        "class": "Persona",
        "label": "Apellido",
        "controlType": "input",
        "type": "text",
        "required": true,
        "order": 2,
        "group": "",
        "options": []
      },
      {
        "field": "sexo",
        "class": "Persona",
        "label": "Genero",
        "controlType": "radio",
        "type": "radio",
        "required": true,
        "order": 3,
        "group": "",
        "options": [
          {
            "key": "Femenino",
            "value": "F"
          },
          {
            "key": "masculino",
            "value": "M"
          },
          {
            "key": "No binario",
            "value": "B"
          },
          {
            "key": "Otros",
            "value": "O"
          }
        ]
      },
      {
        "field": "documento",
        "class": "Persona",
        "label": "Documento",
        "controlType": "input",
        "type": "number",
        "required": true,
        "order": 4,
        "group": "",
        "options": []
      },
      {
        "field": "cuil",
        "class": "Persona",
        "label": "CUIL",
        "controlType": "input",
        "type": "number",
        "required": true,
        "order": 5,
        "group": "",
        "options": []
      },
      {
        "field": "nacionalidad",
        "class": "Pais",
        "label": "Nacionalidad",
        "controlType": "dropdown",
        "type": "select",
        "required": false,
        "order": 6,
        "group": "nacionalidad",
        "options": [
          {
          "key": "Argentina",
          "value": "argentina"
        },
        {
          "key": "Uruguay",
          "value": "uruguay"
        },
        {
          "key": "Brasil",
          "value": "brasil"
        }
      ]
      }

    ];

    /* return of( structure.sort( (a,b) => a.order - b.order ) ); */
    console.log(structure);
    return of(structure);
  }
}
