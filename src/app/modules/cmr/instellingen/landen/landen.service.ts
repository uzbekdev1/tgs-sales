import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Land } from './landen.model';

@Injectable()
export class LandenService {

    public url = "api/landen";
    constructor(public http:HttpClient) { }
    
    getLanden(): Observable<Land[]> {
        return this.http.get<Land[]>(this.url);
    }

    addLand(land:Land){	    
        return this.http.post(this.url, land);
    }

    updateLand(land:Land){
        return this.http.put(this.url, land);
    }

    deleteLand(id: number) {
        return this.http.delete(this.url + "/" + id);
    } 
} 