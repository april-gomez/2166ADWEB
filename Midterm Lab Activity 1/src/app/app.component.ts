import { Component, OnInit } from '@angular/core';
import { Observable, map, interval} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'midterm';
  
  price : number = 20000; 
  ngOnInit() {

  }
  
  Fruits = ['Apple', 'Orange', 'Grapes', 'Mango', 'Kiwi', 'Pomegranate'];
  OnInit() {

  }
  
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;
  Init() {

  }
  
  data: object = {
    name:'April', age: 22, food: 'pizza'
  }
  data1: object = {
    name: 'Arvin', age: 21, food: 'pasta'
  }
  data2: object = {
    name:'Jiji', age: 7, food: 'catfood'
  }
  
  presentDate = new Date();

  a: number = 0.259;
  b: number = 1.3495;
  
  time$: Observable<Date>;
  constructor() {
    this.time$ = interval(1000).pipe(map(()=> new Date()))
  }
}