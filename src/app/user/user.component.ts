import { Component, OnInit } from '@angular/core';
import  { ActivatedRoute, Params} from '@angular/router';
import { from } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private router: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
   
    this.router.params. subscribe (next: (params: Params)=>{
      this.id = +params.id;

    });
    onActive(){
      this.userService.activatedEmitter.next(value: true);  
    }
    

  }

}
