import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-bad-twitter-quotes',
  templateUrl: './bad-twitter-quotes.component.html',
  styleUrls: ['./bad-twitter-quotes.component.css']
})
export class BadTwitterQuotesComponent implements OnInit {
  newQuote: object = {name: "", quote: ""};
  quotes: object;
  errors: object[];
  constructor(private _httpService: HttpService) { 

  }
  getAllQuotes(){
  	this._httpService.indexQuotes()
  	.then((response)=>{
  		console.log("then");
  		console.log(response);
  		this.quotes = response;
  		
  	})
  	.catch((error)=>{
  		console.log("catch");
  		console.log(error);
  	})
  }

  ngOnInit() {
  	this.getAllQuotes();
  }
  addQuote(quoteToAdd){
  	console.log("addQuote in BTQcomponent");
  	console.log(quoteToAdd);
	this.errors = [];
  	this._httpService.createQuote(quoteToAdd)
  	.then((response)=>{
  		console.log("then");
  		console.log(response);
  		if(response.errors){
  			console.log("got validation errors");
  			console.log(response.errors);
  			for(var key in response.errors){
  				this.errors.push(response.errors[key]);
  			}
  		}else{
	  		this.newQuote = {name: "", quote: ""};
	  		this.getAllQuotes();
  		}
  	})
  	.catch((error)=>{
  		console.log("catch");
  		console.log(error);
  	})
  }


}
