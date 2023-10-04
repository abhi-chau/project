import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  constructor(private route:ActivatedRoute){}
  uId:string | null='';
  ngOnInit(): void {
    this.uId = this.route.snapshot.paramMap.get('id');
  }
}
