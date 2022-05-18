import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  form: FormGroup;

  sexList = [ 'Femenino', 'Masculino', 'No binario', 'Otro'];

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
