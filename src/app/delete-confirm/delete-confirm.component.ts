import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent implements OnInit {

  constructor(private ds:DataService,@Inject(MAT_DIALOG_DATA)private data:any) { }

  ngOnInit(): void {
  }
  deleteCustomer(){
    console.log(this.data);
    this.ds.deleteCustomer(this.data)
    
  }

}
