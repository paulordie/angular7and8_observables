import { Component, OnInit } from '@angular/core';
import { Observable, Observer, interval, observable, Subscription } from 'rxjs';
import { nextTick } from 'q';

@Component({
  selector: 'app-cold-observalbes',
  templateUrl: './cold-observalbes.component.html',
  styleUrls: ['./cold-observalbes.component.css']
})
export class ColdObservalbesComponent implements OnInit {

  subscription1: Subscription;
  subscription2: Subscription;

  n1: number = 0;
  n2: number = 0;
  s1: string = "";
  s2: string = "";
  constructor() { }

  ngOnInit() {
    this.s1 = 'Initializing s1...';
    this.s2 = 'Initializing s2...';

    const myIntervalObservable = new Observable(
      (observer: Observer<any>) => {
        let i: number = 0;
        let id = setInterval(()=>{
          i++;
          console.log('from Observable: ', i);
          if (i == 10)
            //observer.complete();
            observer.next(i); // chega até 10 na contagem
          else if (i%2 == 0)
            observer.next(i);
        }, 1000);
        return () => {
          clearInterval(id);
        }
      }
    );
    this.subscription1 = myIntervalObservable.subscribe(
      (_n) => {this.n1 = _n},
      (error) => {this.s1 = 'Error: ' + error},
      () => {this.s1 = 'Completed s1'}
    );
    this.subscription2 = myIntervalObservable.subscribe(
      (_n) => {this.n2 = _n},
      (error) => {this.s2 = 'Error: ' + error},
      () => {this.s2 = 'Completed s2'}
    );
    setTimeout(()=>{
      this.subscription1.unsubscribe();
      this.subscription2.unsubscribe();
    }, 11000)
  }
}
