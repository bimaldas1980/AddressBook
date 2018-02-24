import { Component, OnInit } from '@angular/core';
import { Address } from '../Models/Address';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  addresses: Address[] = [];


  constructor() { 
    let addr = new Address();
    addr.name = "Bimal";
    addr.addressone = "U29";
    addr.addresstwo = "42 Wattlebird St.";
    addr.city = "Mango Hill";
    addr.state = "QLD";
    addr.pincode = "4509";
    this.addresses.push(addr);

    addr = new Address();
    addr.name = "Doni";
    addr.addressone = "U44";
    addr.addresstwo = "42 Wattlebird St.";
    addr.city = "Mango Hill";
    addr.state = "QLD";
    addr.pincode = "4509";
    this.addresses.push(addr);

    addr = new Address();
    addr.name = "Juby";
    addr.addressone = "U46";
    addr.addresstwo = "42 Wattlebird St.";
    addr.city = "Mango Hill";
    addr.state = "QLD";
    addr.pincode = "4509";
    this.addresses.push(addr);
  }

  ngOnInit() {
  }

}
