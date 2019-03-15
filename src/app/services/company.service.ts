import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 
export interface Company {
  id?: string;
  companyName: string;
  city: string;
  provincie: string;
  country: string;
  relationType: string;
  createdAt: number;
}
 
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private companiesCollection: AngularFirestoreCollection<Company>;
 
  private companies: Observable<Company[]>;
 
  constructor(db: AngularFirestore) {
    this.companiesCollection = db.collection<Company>('companies');
 
    this.companies = this.companiesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
 
  getCompanies() {
    return this.companies;
  }
 
  getCompany(id) {
    return this.companiesCollection.doc<Company>(id).valueChanges();
  }
 
  updateCompany(company: Company, id: string) {
    return this.companiesCollection.doc(id).update(company);
  }
 
  addCompany(company: Company) {
    return this.companiesCollection.add(company);
  }
 
  removeCompany(id) {
    return this.companiesCollection.doc(id).delete();
  }
}