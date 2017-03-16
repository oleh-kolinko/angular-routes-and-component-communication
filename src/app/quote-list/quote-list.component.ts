import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  quoteList = [
    {
      id: 1,
      text: 'I love fries',
      author: 'Armstrong'
    },
    {
      id: 2,
      text: 'Stay thirsty, my friends',
      author: 'Daniel'
    },
    {
      id: 3,
      text: 'Do things that don\'t scale',
      author: 'Steve Jobs'
    }
  ];

  removeQuote(id){
    this.quoteList = this.quoteList.filter(
      (quote) => quote.id !== id
    )
  }

  constructor() { }

  ngOnInit() {
  }

}
