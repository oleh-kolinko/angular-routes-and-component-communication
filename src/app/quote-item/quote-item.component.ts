import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
//EventEmitter => allows to create new events
//input / output => decorators , allow you to do communication between parent-child components
@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css']
})
export class QuoteItemComponent implements OnInit {

  @Input() quote;//Input from different components:
  @Output() onDelete = new EventEmitter<number>();//create new custom event for Output. <number> - return type

  onQuoteDelete(){
    this.onDelete.emit(this.quote.id); //emit -> Send data to parent with custom event(onDelete)
  }

  constructor() { }

  ngOnInit() {
  }

}
