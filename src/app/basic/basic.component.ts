import { Component, OnInit } from '@angular/core';
import { Observable, Observer, interval } from 'rxjs';
import { nextTick } from 'q';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const myFirstObservable = new Observable(
      (observer: Observer<number>) => {
        observer.next(1); // quem estiver observando esse objeto verá essas infors next(1)...
        observer.next(2);
        observer.next(3);
        observer.next(4);
        observer.next(5);
        observer.error("6");
        observer.complete();
      }
    );
    myFirstObservable.subscribe(
      (n: number) => console.log(n), 
      (error) => console.error(error),
      () => console.log('completed'));

    const timerCount = interval(500);
    timerCount.subscribe(
        (n) => console.log(n)
      );
    console.log("after interval");
  }

}
