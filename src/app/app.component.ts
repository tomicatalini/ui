import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { FormBase } from './model/FormBase';
import { FormService } from './service/form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ FormService ]
})
export class AppComponent {
  title = 'ui';

  structure$: Observable<FormBase<any>[]>;

    constructor( service: FormService){
      this.structure$ = service.getStructure("Persona");
    }
}
