import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    fname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    lname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    city: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    address: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],

  })

  constructor(private fb: FormBuilder,private ds:DataService,@Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {
  }
  register() {
    let fname = this.registerForm.value.fname
    let lname = this.registerForm.value.lname
    let email = this.registerForm.value.email
    let city = this.registerForm.value.city
    let address = this.registerForm.value.address
    if (this.registerForm.valid) {
      this.ds.register(fname,lname,email,city,address)
      
    }
    else {
      alert('Invalid form')
    }
  }

}
