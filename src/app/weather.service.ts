import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
 city
  constructor(private http:HttpClient) {
    this.city ="tunis";
   }

  getdata(city){
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+',uk&APPID=41092b6eaee57c6b798bd808f67f2632')
  }
  getmap(city){
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=41092b6eaee57c6b798bd808f67f2632')
  }
  getdate(){
    return this.http.get('http://worldclockapi.com/api/json/utc/now')
  }
}
