import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'details', loadChildren: './company-details/company-details.module#CompanyDetailsPageModule' },
  { path: 'details/:id', loadChildren: './company-details/company-details.module#CompanyDetailsPageModule' },
  { path: 'company-details', loadChildren: './company-details/company-details.module#CompanyDetailsPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
