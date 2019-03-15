import { Company, CompanyService } from '../services/company.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
 
@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.page.html',
  styleUrls: ['./company-details.page.scss'],
})
export class CompanyDetailsPage implements OnInit {
 
  company: Company = {
    companyName: '',
    city: '',
    provincie: '',
    country: '',
    relationType: '',
    createdAt: new Date().getTime(),

  };
 
  companyId = null;
 
  constructor(private route: ActivatedRoute, private nav: NavController, private companyService: CompanyService, private loadingController: LoadingController) { }
 
  ngOnInit() {
    this.companyId = this.route.snapshot.params['id'];
    if (this.companyId)  {
      this.loadCompany();
    }
  }
 
  async loadCompany() {
    const loading = await this.loadingController.create({
      message: 'Loading Company..'
    });
    await loading.present();
 
    this.companyService.getCompany(this.companyId).subscribe(res => {
      loading.dismiss();
      this.company = res;
    });
  }
 
  async saveCompany() {
 
    const loading = await this.loadingController.create({
      message: 'Saving Company..'
    });
    await loading.present();
 
    if (this.companyId) {
      this.companyService.updateCompany(this.company, this.companyId).then(() => {
        loading.dismiss();
        this.nav.navigateBack('/');
      });
    } else {
      this.companyService.addCompany(this.company).then(() => {
        loading.dismiss();
        this.nav.navigateBack('/');
      });
    }
  }
 
}