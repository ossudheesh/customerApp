import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';
import { RegisterComponent } from '../register/register.component';
import { DataService } from '../services/data.service';
import { ViewMoreComponent } from '../view-more/view-more.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  
})
export class CustomersComponent implements OnInit {
  customers: any
  totalLength: any
  page: number = 1
  grid = true
  list = false
  cIndex:any
  searchElement:any

  constructor(private dialogRef: MatDialog, private ds: DataService) {
    this.customers = this.ds.customers
    
  }

  ngOnInit(): void {
    this.totalLength = this.ds.customers.length
  }
  
  openDialog() {
    this.dialogRef.open(RegisterComponent)
  }
  openEdit(customer:any) {
    let customerData=customer
    this.cIndex=this.customers.indexOf(customer)
    let cIndex=this.cIndex
    this.dialogRef.open(EditComponent,{data:{customerData,cIndex}})
  }
  viewMore(customer:any){
    let customerData=customer
    this.cIndex=this.customers.indexOf(customer)
    let cIndex=this.cIndex
    this.dialogRef.open(ViewMoreComponent,{data:{customerData,cIndex}})
  }
  gridView() {
    this.grid = true
    this.list = false
  }
  listView() {
    this.grid = false
    this.list = true
  }

}
