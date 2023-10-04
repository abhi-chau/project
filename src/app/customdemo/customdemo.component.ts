import { Component, OnInit ,Input ,Output } from '@angular/core';

@Component({
  selector: 'app-customdemo',
  templateUrl: './customdemo.component.html',
  styleUrls: ['./customdemo.component.css']
})
export class CustomdemoComponent implements OnInit{
   @Input() public ElectronicsCount:number = 0;
   @Input() public JeweleryCount:number = 0;
   @Input() public MensCount:number = 0;
   @Input() public WomensCount:number = 0;
    
  constructor(){}
  ngOnInit(): void {
    
  }
}
