import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ShortenItemComponent } from '../shorten-item/shorten-item.component';
@Component({
  selector: 'app-shorten-text',
  imports: [CommonModule, FormsModule, ShortenItemComponent],
  templateUrl: './shorten-text.component.html',
  styleUrl: './shorten-text.component.css'
})
export class ShortenTextComponent {


  messages: textMessage[] = [
    {
      name: "John Doe",
      message: `Hello everyone! I just wanted to take a moment to express how grateful I am to be working with such an amazing team. 
      The ideas and perspectives you all bring to the table have made this experience not only productive but also incredibly inspiring. 
      Collaboration like this reminds me why I love what I do, and I’m confident we’re heading toward something extraordinary. 
      Keep the momentum going and let’s continue building something truly remarkable together!`,
      color: "purple",
      index: 1,
    },
    {
      name: "Jane Smith",
      message: `Good day to all! I hope this message finds you in great spirits. I’ve been reviewing the progress we’ve made so far, 
      and I must say, it’s nothing short of impressive. Each one of you has shown remarkable dedication and creativity, and it really 
      shines through in the results. Let’s stay on course, keep our communication open, and continue to learn from one another as we move forward. 
      Together, there’s nothing we can’t achieve!`,
      color: "red",
      index: 2,
    },
    {
      name: "Michael Johnson",
      message: `Greetings, team! As we dive deeper into this project, I can’t help but feel inspired by the level of expertise and commitment each of you brings. 
      Challenges may arise, but with the energy and focus you’ve demonstrated, I’m confident we’ll overcome them with ease. 
      Remember, every great achievement starts with a shared vision, and we’re lucky to have one that is so clear and aligned. Keep pushing forward, and 
      let’s make this project a resounding success!`,
      color: "blue",
      index: 3,
    },
    {
      name: "Emily Davis",
      message: `Hi team! I wanted to take a moment to reflect on how far we’ve come. From brainstorming initial ideas to executing detailed plans, 
      it’s been a journey worth celebrating. I’m continually amazed by the enthusiasm and creativity each of you brings to the table. Let’s keep this momentum alive, 
      staying focused on our goals while supporting one another along the way. The finish line is within reach, and I’m excited about what we’ll accomplish together!`,
      color: "green",
      index: 4,
    },
    {
      name: "Sarah Miller",
      message: `Hello, everyone! It’s truly incredible to see how our combined efforts are shaping this project into something exceptional. 
      The synergy within this team is nothing short of inspiring, and it’s clear that each of you is giving your best. As we approach the next milestones, 
      let’s remember to stay adaptable and open to new ideas. Innovation often comes from unexpected places, and I have no doubt we’ll find the right solutions together. 
      Here’s to continued success and collaboration!`,
      color: "black",
      index: 5,
    },
  ];

  selectedMessage: textMessage | null = null;

  selectMessage(message: textMessage): void {
    this.selectedMessage = message;
  }
  
  handleSave() : void{
    if (this.selectedMessage) {
      const index = this.selectedMessage.index-1;
      console.log("index ", index);
      this.messages[index].message = this.selectedMessage.message;
      
    }
  }
}

export interface textMessage{
  message: string;
  name: string;
  color: string;
  index: number;
}
