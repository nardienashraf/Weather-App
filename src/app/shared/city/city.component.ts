import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Icity } from 'src/app/Models/icity';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnChanges, OnInit {
  @Input() city!:Icity
  degreeSelected:string = 'cel';
  

  ngOnChanges(){
    console.log(this.city)
  }
  ngOnInit(): void {
  }
  
}
