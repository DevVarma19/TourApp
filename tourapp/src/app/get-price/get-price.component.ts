import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Package } from '../model/package';
import { PackageServiceService } from '../service/package-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-get-price',
  templateUrl: './get-price.component.html',
  styleUrls: ['./get-price.component.css']
})
export class GetPriceComponent implements OnInit {

  package = new Package();
  packages : Package[] = [];
  pk_id : string = "";
  total_price : number = 0;
  showPrice : boolean = false;
  discount : number = 0;
  days : number = 0;

  constructor(private route: ActivatedRoute, private router: Router, private packageService: PackageServiceService) {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    // console.log(this.packageService.findByID(f.value.pk_id));
    this.packageService
    .findByID(f.value.pk_id)
    .subscribe(result => {
      console.log(result);
      this.package = result;
      this.days = f.value.days;
      this.calculatePrice();
    });
  }

  calculatePrice() {
    
    if(this.days <= 5) {
      this.discount = 0;
    } else if(this.days <= 8) {
      this.discount = 3;
    } else if(this.days <= 10) {
      this.discount = 5;
    } else {
      this.discount = 7;
    }
    this.discount = (this.package.basic_fare * this.days)*this.discount/100;
    this.total_price = ((this.package.basic_fare * this.days) - this.discount);
    this.total_price = this.total_price + this.total_price * 12/100;

    this.showPrice = true;
  }

  ngOnInit(): void {
    this.packageService.findAll().subscribe(data => {
      this.packages = data;
    });
  }

}
