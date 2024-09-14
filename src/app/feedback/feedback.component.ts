import { Component, OnInit } from '@angular/core';
import { FeedbackModel } from '../models/FeedbackModel';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: 
  [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})

export class FeedbackComponent implements OnInit{

  feedback: FeedbackModel = new FeedbackModel('','',1,'','');

  
  ngOnInit(): void 
  {
    
  }

  SubmitFeedback() 
  {
     console.log(this.feedback);
  }


}
