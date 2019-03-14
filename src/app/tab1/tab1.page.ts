import { Component, OnInit } from '@angular/core';
import { Company, CompanyService } from '../services/company.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
 
  companies: Company[];
  private subscription;
 
  constructor(private companyService: CompanyService) { }
 
  ngOnInit() {
    this.subscription = this.companyService.getCompanies().subscribe(res => {
      this.companies = res;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    }
 
  remove(item) {
    this.companyService.removeCompany(item.id);
  }
}
