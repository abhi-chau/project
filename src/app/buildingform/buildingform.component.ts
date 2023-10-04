import { Component,OnInit } from '@angular/core';
import { FormBuilder ,FormArray} from '@angular/forms';


@Component({
  selector: 'app-buildingform',
  templateUrl: './buildingform.component.html',
  styleUrls: ['./buildingform.component.css']
})
export class BuildingformComponent implements OnInit{
  constructor(private fb:FormBuilder){}
  i:any;
  frmRegister:any;
 ngOnInit(): void {
  this.frmRegister = this.fb.group({
    Name:this.fb.control(''),
    Price:this.fb.control(0),
    frmStock:this.fb.group({
      Status:this.fb.control(true),
      City:this.fb.control('Delhi')
    }),
    newControls:this.fb.array([this.fb.control('')])
  })
 }
 get NewControls(){
  return this.frmRegister.get('newControls') as FormArray;
 }
 AddClick(){
  this.NewControls.push(this.fb.control(''))
 }
 RemoveClick(i:any){
  this.NewControls.removeAt(i)
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
