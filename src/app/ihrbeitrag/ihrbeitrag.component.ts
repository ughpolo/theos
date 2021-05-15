import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';


@Component({
  selector: 'app-ihrbeitrag',
  templateUrl: './ihrbeitrag.component.html',
  styleUrls: ['./ihrbeitrag.component.css']
})
export class IhrbeitragComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
}
