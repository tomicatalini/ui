import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {

  name = new FormControl('');
  surname = new FormControl('');
  sex = new FormControl('');
  document = new FormControl('');
  cuil = new FormControl('');
  from = new FormControl('');
  
  constructor() { }

  ngOnInit(): void {
  }

  updateName(){
    this.name.setValue('Pedro Flores');
  }

}
