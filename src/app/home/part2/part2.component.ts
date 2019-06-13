import { Component, OnInit, Sanitizer, ɵ_sanitizeUrl, Output, EventEmitter } from '@angular/core';
import{WeatherService} from './../../weather.service'
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.css']
})
export class Part2Component implements OnInit {
@Output() fonction = new EventEmitter<any>();
file1;
location = "tunis";  

constructor(private service:WeatherService, private sanitizer: DomSanitizer) { }

 url
 url1
 x
  ngOnInit() {
    this.service.city=this.location

    this.service.getmap(this.location).subscribe((map:any)=>{
        this.file1=map
        console.log(this.file1)
        this.x=map.coord
        this.url="https://www.ventusky.com/?p="+this.x.lat+";"+this.x.lon+";7&l=temperature-2m"
        this.url1=this.sanitizer.bypassSecurityTrustResourceUrl(this.url)
        this.fonction.emit(this.file1)

      })

  }


  handleClick(){
    this.service.city=this.location
    console.log(this.location)
    this.service.getmap(this.location).subscribe((map:any)=>{
      this.file1=map
      console.log(this.file1)
      this.x=map.coord
        this.url="https://www.ventusky.com/?p="+this.x.lat+";"+this.x.lon+";7&l=temperature-2m"
        this.url1=this.sanitizer.bypassSecurityTrustResourceUrl(this.url)
        this.fonction.emit(this.file1)
        
  })
  }

  

}
