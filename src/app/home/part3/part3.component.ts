import { Component, OnInit } from '@angular/core';
import{WeatherService} from './../../weather.service'
@Component({
  selector: 'app-part3',
  templateUrl: './part3.component.html',
  styleUrls: ['./part3.component.css']
})
export class Part3Component implements OnInit {
file
  constructor(private service : WeatherService) { }

  ngOnInit() {
    this.service.getdate().subscribe((date:any)=>{
        this.file=date
        console.log(this.file)

    })

}}
