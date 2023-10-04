import { Component ,OnInit} from '@angular/core';
import { Observable, from, of} from 'rxjs';
import { filter, map ,} from 'rxjs/operators';

@Component({
  selector: 'app-observabledemo',
  templateUrl: './observabledemo.component.html',
  styleUrls: ['./observabledemo.component.css']
})
export class ObservabledemoComponent implements OnInit{
  [x: string]: any;
  val:any = []

  // myObservable = new Observable((observer)=>{
  //   console.log("Observer start")
  //   setTimeout(()=>{observer.next("1")},1000)
  //   setTimeout(()=>{observer.next("2")},2000)
  //   setTimeout(()=>{observer.next("3")},3000)
  //   setTimeout(()=>{observer.error(new Error("Something went wrong please try again later"))},4000)
  //   setTimeout(()=>{observer.next("5")},5000)
  //   setTimeout(()=>{observer.complete()},6000)

  // })

   array1 = [1,2,3,4,5];
   array2 = ['a','b','c'];
   
  //  myObservable = of(this.array1,this.array2,1,2,3,"asfasg")
   myObservable = from(this.array1)

  transformdbObj =this.myObservable.pipe(map((item)=>{
    return item * 5;
  }),filter((item)=>{
    return item >= 15;
  }))

  // filteredbObj =this.transformdbObj.pipe(filter((item)=>{
  //   return item >=15
  // }))

  
 constructor(){};
 ngOnInit(): void {
   this.  transformdbObj .subscribe((val: any)=>{
    console.log(val)
   },(error: { message: any; })=>{
    alert(error.message)
   },()=>{
    alert("Observable has complete emitting all values")
   })
 }
}
