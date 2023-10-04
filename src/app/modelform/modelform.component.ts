import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modelform',
  templateUrl: './modelform.component.html',
  styleUrls: ['./modelform.component.css']
})
export class ModelformComponent implements OnInit{
  frmRegister = new FormGroup({
    Name:new FormControl(''),
    Price:new FormControl(0),
    frmStock:new FormGroup({
      Status:new FormControl(true),
      City:new FormControl('')
    })
  })
  constructor(){}
  ngOnInit(): void {
    
  }
  FormSubmit(obj:any){
    alert(JSON.stringify(obj));
  }
  UpdatePartial(){
    this.frmRegister.patchValue({
      Name:'Samsung TV',
      frmStock:{
        City: 'Hyd'
      }
    })
  }
}
