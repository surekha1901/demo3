import { Component, OnInit, OnDestroy} from '@angular/core';

import { interval, Subscription, Observable } from 'rxjs';
import {map,filter} from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // this.firstObsSubscription = interval(period: 1000).subscribe(next: count =>{
    //   console.log(count);

    
    // });

    const customIntervalObservable = Observable.create(observer => {
      let count =0;
      setInterval(handler: ()=> {
        observer.next(count);
        if(count===2){
          observer.Complete();
          
        }
        if(count>3){
          observer.error(new Error (message: 'Count is Greater than 3!'));
          
        }
        count++
      }, 
      timeout: 1000);


      });
      customIntervalObservable.pipe(filter(predicate: data=>{
        return data>0;
      }),map(project: (data:number)=> {
        return 'Round: '+(data+1);

      }));
    this.firstObsSubscription = customIntervalObservable.subscribe(data=> {
        console.log(data);

      }, error=>{
        console.log(error);
        alert(error.message);
      },()=>{
        console.log('Complete!');
      }
      );
    

  }

  ngOnDestroy(): void{
    this.firstObsSubscription.unsubscribe();

  }

}
