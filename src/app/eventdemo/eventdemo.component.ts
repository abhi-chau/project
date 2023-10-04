import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-eventdemo',
  templateUrl: './eventdemo.component.html',
  styleUrls: ['./eventdemo.component.css']
})
export class EventdemoComponent implements OnInit{
  public InsertClick(eventArgs:any,id:number,name:string,stock:boolean,cities:string[],
    rating:{rate:number,count:number}){
      document.write(`
      id:${id}<br>
      Name:${name}<br>
      Stock:${cities.toString()}<br>
      Rating:Rate${rating.rate}[${rating.count}]<br>]
      Button Name : ${eventArgs.target.name}      
      `)
    }
constructor(){}
ngOnInit(): void {
  
 }
}
