import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormBase } from '../model/FormBase';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {

  constructor() { }

  toFormGroup(formBase: FormBase<String>[] ) {
    const group: any = {};
    const algo: any = [];

    console.warn('formControlService');
    console.log(formBase);
    formBase.forEach( formBase => {
      group[formBase.group] = formBase.required ? new FormControl('', Validators.required)
                                              : new FormControl('');
      algo.push(          formBase.required ? new FormControl('', Validators.required) : new FormControl('')
      );
    });

    console.log(algo);
    console.log(group);
    console.warn('formControlService');
    console.log(new FormGroup(algo));
    
    /* return new FormGroup(group); */
    return new FormGroup(algo);
  }
}
