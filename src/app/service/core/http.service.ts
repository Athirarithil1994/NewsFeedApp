import { Injectable } from '@angular/core';
import { UtilService } from '../Util/util';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
data:any = [];
apiKey :string="ba9668e188d34294ae47e11f3b131758";

constructor(private util:UtilService,private http:HttpClient) { }


 /*service module
   @ fetching news feeds
   @ get method */

  getNewsFeeds():Observable<any>{
    return this.http.get(UtilService.BASE_URL + '/top-headlines?country=us&apiKey='+this.apiKey, {
     
    });
  
  }


  
}
