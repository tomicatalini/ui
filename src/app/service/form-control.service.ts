import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormBase } from '../model/FormBase';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {

  constructor() { }

  toFormGroup(questions: FormBase<String>[] ) {
    const group: any = {};

    questions.forEach( question => {
      group[question.group] = question.required ? new FormControl('', Validators.required)
                                              : new FormControl('');
    });
    
    return new FormGroup(group);
  }
}
