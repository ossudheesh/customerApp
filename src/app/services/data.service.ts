import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  customers = [
    {
      firstname: 'Ted',
      lastname: 'James',
      email: 'ted@gmail.com',
      city: 'Pheonix',
      address: 'Arizona'
    },
    {
      firstname: 'Mischelle',
      lastname: 'Thompson',
      email: 'mischelle@gmail.com',
      city: 'Encinitas',
      address: 'California'
    },
    {
      firstname: 'Zed',
      lastname: 'Bishop',
      email: 'zed@gmail.com',
      city: 'Seattle',
      address: 'California'
    },
    {
      firstname: 'Tina',
      lastname: 'Adams',
      email: 'tina@gmail.com',
      city: 'Chandler',
      address: 'Arizona'
    },
    {
      firstname: 'Igor',
      lastname: 'Minar',
      email: 'igor@gmail.com',
      city: 'Dallas',
      address: 'Texas'
    },
    {
      firstname: 'Brad',
      lastname: 'Green',
      email: 'brad@gmail.com',
      city: 'Oriando',
      address: 'Florida'
    },
    {
      firstname: 'Misko',
      lastname: 'Hevery',
      email: 'misko@gmail.com',
      city: 'Carey',
      address: 'California'
    },
    {
      firstname: 'Heedy',
      lastname: 'Wahlin',
      email: 'heedy@gmail.com',
      city: 'Anaheim',
      address: 'California'
    },
    {
      firstname: 'John',
      lastname: 'Papa',
      email: 'john@gmail.com',
      city: 'Oriando',
      address: 'Florida'
    },
    {
      firstname: 'Tonya',
      lastname: 'Smith',
      email: 'tonya@gmail.com',
      city: 'Atlanta',
      address: 'Georgia'
    }
  ]
  constructor() {
    this.getDetails()
   }
  saveDetails(){
    localStorage.setItem("customers",JSON.stringify(this.customers))
  }
  getDetails(){
    if(localStorage.getItem("customers")){
      this.customers=JSON.parse(localStorage.getItem("customers") || '')
    }
  }

  register(fname: any, lname: any, email: any, city: any, address: any) {
    const found = this.customers.find(element => element.email == email);
    if (found) {
      alert('Email already exists')
    }
    else {
      const data = {
        firstname: fname,
        lastname: lname,
        email: email,
        city: city,
        address: address
      }
      this.customers.push(data);
      this.saveDetails()
      window.location.reload()
      alert('Customer Added')
    }

  }
  update(cIndex: any, fname: any, lname: any, email: any, city: any, address: any) {

    const data = {
      firstname: fname,
      lastname: lname,
      email: email,
      city: city,
      address: address
    }
    if (cIndex !== -1) {
      this.customers[cIndex] = data;
      this.saveDetails()
      alert('Customer info updated')
    }
  }
  deleteCustomer(cIndex:any){
    if (cIndex !== -1) {
      this.customers.splice(cIndex, 1)
      this.saveDetails()
      window.location.reload()
      alert('Customer Removed')
    }
  }
}
