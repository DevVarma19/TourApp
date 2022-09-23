import { Component, OnInit } from '@angular/core';
import { Package } from '../model/package';
import { PackageServiceService } from '../service/package-service.service';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {
  
  packages : Package[] = [];

  constructor(private packageService : PackageServiceService) { }

  ngOnInit() {
    this.packageService.findAll().subscribe(data => {
      this.packages = data;
    });
  }

}
