import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactId : string;

  constructor(private route: ActivatedRoute) { }//Dependancy injection

  ngOnInit() {
    this.route.params.subscribe((params)=> {
      this.contactId = params['id']//Get id from URL
    })
  }

}
