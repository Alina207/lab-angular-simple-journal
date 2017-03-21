import { Injectable } from '@angular/core'; // makes service "injectable" for component
import { Http } from '@angular/http'; // to make get/post requests; can used .get method on it
import 'rxjs/add/operator/toPromise'; // toPromise is built infunction  we need to use


@Injectable() // decorator- adds extra features to class; whenever referring to anything inside the class use "this." within the class
export class ApiService { // what "this" is referring to
  BASE_URL: string = 'http://localhost:3000'; // so we don't have to re-type it everytime; also we change this when its deployed
  constructor(private myHttp: Http) { }
  getEntries() {
    return this.myHttp.get(`${this.BASE_URL}/api/journal-entries`) // their get functions returns oberservables, but we want to convert it to toPromise
     .toPromise() // 2 methods: .then or .catch
    //  .then((result) => { // .then is used when everything is successful; if hteres any error it executes to catch
    //    result.json() ; // method converts our result to json format
    //  })

  }
}
