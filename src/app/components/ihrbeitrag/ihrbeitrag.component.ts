import { Component, OnInit } from '@angular/core';
import {UntypedFormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';


@Component({
  selector: 'app-ihrbeitrag',
  templateUrl: './ihrbeitrag.component.html',
  styleUrls: ['./ihrbeitrag.component.scss']
})
export class IhrbeitragComponent {
  emailFormControl = new UntypedFormControl('', [
    Validators.required,
    Validators.email,
  ]);
}
