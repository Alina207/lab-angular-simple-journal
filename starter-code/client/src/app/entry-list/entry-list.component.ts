import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'; // ApiService  or any class is a custom type

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})

export class EntryListComponent implements OnInit {
  entries = []
  constructor(private Api: ApiService) { } //

  ngOnInit() { // method thats called when a component is created
    this.Api.getEntries().then((result) => {
      this.entries = result.json();
    })
    .catch(err => console.log(err));
  }
}
