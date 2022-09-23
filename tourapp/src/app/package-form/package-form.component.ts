import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Package } from '../model/package';
import { PackageServiceService } from '../service/package-service.service';

@Component({
  selector: 'app-package-form',
  templateUrl: './package-form.component.html',
  styleUrls: ['./package-form.component.css']
})
export class PackageFormComponent implements OnInit {

  package: Package = new Package();

  constructor(private route: ActivatedRoute, private router: Router, private packageService: PackageServiceService) {
    this.package = new Package();
  }

  showMsg: boolean = false;
  onSubmit() {
    this.packageService.save(this.package)
      .subscribe(result => {
        this.router.navigate(['/add-package']),
          this.showMsg = true
      });
  }

  gotoPackageList() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
