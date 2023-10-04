import { Component,EventEmitter,Input,OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{
 @Input() public MsgFromParent:string = "";
 @Input() public ProductsDetails:{Name:string,Price:number} = {Name:"",Price:0};

 @Output() public ChildComponentClick:EventEmitter<string> = new EventEmitter<string>();
 @Output() public ChildComponentChange:EventEmitter<any> = new EventEmitter<string>();
 public SendClick():void{
   this.ChildComponentClick.emit("Hello ! from Child");
   this.ChildComponentChange.emit({Name:"TV",Price:4500.44});
}
 constructor(){}
 ngOnInit(): void {
   
 }
}
