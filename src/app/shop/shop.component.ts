import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{
  email: string | undefined ;
  emailControl: AbstractControl | undefined;
  myForm: FormGroup | undefined
  ngOnInit() {
      this.myForm = new FormGroup<any>({
          email: new FormControl('', Validators.compose([Validators.required, Validators.email]))
      });
      this.emailControl = this.myForm.controls['email'];
  }
  public Categories:string[] = [];
  public Products:any[]=[];
  public CartItems:any[]=[];
  public CartItemsCount:number = 0;
  public ToggleCart:boolean = false;
    constructor( ){ }
    
}
