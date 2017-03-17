import { Component, OnInit } from '@angular/core';
import { CounterService } from '../my-services/counter.service';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css'],
})
export class MyCounterComponent implements OnInit {

  //Dependace injection -fancy name to
  // import and create new instance of class(service)
  constructor(private theCounter: CounterService ) { }

  ngOnInit() {
  }

  incrementCounter(){
    this.theCounter.increment()
  }

}
