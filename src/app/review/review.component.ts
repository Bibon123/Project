import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IMessage } from './IMessage.interface';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  messages: IMessage[] = []
  message: IMessage = {userName: '', message: ''};
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getComments().subscribe((messages: IMessage[]) => {
      this.messages = messages;
    });
    
  }
  
  addComment() {
    if(this.message && this.message.userName && this.message.message){
      this.dataService.addComment(this.message);
      this.messages.push(this.message);
      this.message = {userName: '', message: ''};
    }
  }

}
