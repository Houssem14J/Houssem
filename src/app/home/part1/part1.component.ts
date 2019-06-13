import { Component, OnInit, Input } from '@angular/core';
import{WeatherService} from './../../weather.service'
@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.css']
})
export class Part1Component implements OnInit {
@Input() data: any;
x;
file;
  constructor(private service:WeatherService) { 
    // this.service.city.subscribe(data =>{
    //   this.x=this.service.city
    //  })
  }

  ngOnInit() {
    this.file = this.data;
    console.log(this.data)

  //  console.log(this.x)
    // this.service.getmap(this.x).subscribe((map:any)=>{
    //   this.file=map
    //   console.log("zaeaze" ,this.file)
  
    // })



  }
  
}
