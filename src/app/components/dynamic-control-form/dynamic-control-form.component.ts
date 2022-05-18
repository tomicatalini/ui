import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBase } from 'src/app/model/FormBase';

@Component({
  selector: 'app-dynamic-control-form',
  templateUrl: './dynamic-control-form.component.html',
  styleUrls: ['./dynamic-control-form.component.css']
})
export class DynamicControlFormComponent implements OnInit {
  
  @Input() formBase!: FormBase<string>;
  @Input() form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  get isValid() { return this.form.controls[0].valid; }

}
