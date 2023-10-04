import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{
  public msg:string = "";
  public product:{Name:string,Price:number} = {Name:"",Price:0};
  public msgFromChild:string = "";
  public obj:any = {};
  constructor(){}
  ngOnInit(): void {
     
  }
  
  public SendClick():void{
    this.msg = "Hello ! from Parent";
    this.product = {
      Name:"Samsung TV",
      Price:46000.44
    }
  }
  public CollectMsg(e:string){
    this.msgFromChild = e;
  }
  public CollectObject(e:any){
    this.obj = e;
  }
}
