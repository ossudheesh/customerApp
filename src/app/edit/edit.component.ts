import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmComponent } from '../delete-confirm/delete-confirm.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  firstName=this.data.customerData.firstname
  lastName=this.data.customerData.lastname
  mail=this.data.customerData.email
  cityName=this.data.customerData.city
  addr=this.data.customerData.address


  registerForm = this.fb.group({
    fname: [this.firstName, [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    lname: [this.lastName, [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    email: [this.mail, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    city: [this.cityName, [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    address: [this.addr, [Validators.required, Validators.pattern('[a-zA-Z]*')]],

  })
  constructor(private dialogRef: MatDialog,private fb: FormBuilder,private ds:DataService,@Inject(MAT_DIALOG_DATA)private data:any) { }

  ngOnInit(): void {
  }
  update() {
    
    let fname = this.registerForm.value.fname
    let lname = this.registerForm.value.lname
    let email = this.registerForm.value.email
    let city = this.registerForm.value.city
    let address = this.registerForm.value.address
    let cIndex=this.data.cIndex
    

    if (this.registerForm.valid) {
      this.ds.update(cIndex,fname,lname,email,city,address)
    }
    else {
      alert('Invalid form')
    }
  }
  deleteConfirm(){
      let cIndex=this.data.cIndex
      this.dialogRef.open(DeleteConfirmComponent,{data:cIndex})
 
  }

}
