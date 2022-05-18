import { Component, OnInit, Input} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBase } from 'src/app/model/FormBase';
import { FormControlService } from 'src/app/service/form-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [FormControlService]
})
export class DynamicFormComponent implements OnInit {

  @Input() formBase: FormBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor( private fcs: FormControlService) { }

  ngOnInit(): void {
    this.form = this.fcs.toFormGroup( this.formBase as FormBase<string>[] )
    console.log(this.form);
  }

  onSubmit(){
    this.payLoad = JSON.stringify( this.form.getRawValue());
  }


}
