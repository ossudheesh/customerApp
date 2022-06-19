import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.css']
})
export class ViewMoreComponent implements OnInit {
  firstName=this.data.customerData.firstname
  lastName=this.data.customerData.lastname
  mail=this.data.customerData.email
  cityName=this.data.customerData.city
  addr=this.data.customerData.address

  constructor(@Inject(MAT_DIALOG_DATA)private data:any) { }

  ngOnInit(): void {
  }

}
