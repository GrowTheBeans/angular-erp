import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuoteService {
    constructor(
        private http:HttpClient,@Inject('BASE_CONFIG') private config
    ){}
    getQuote():Observable<object>{
        // const uri = this.config.url+'/quotes/'+(Math.floor(Math.random()*10));
        
        const uri = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
        return this.http.get(uri).pipe(map(data=>data));
    }
}