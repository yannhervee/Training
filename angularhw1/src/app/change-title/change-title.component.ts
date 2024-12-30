import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChangeTitleItemComponent } from '../change-title-item/change-title-item.component';


@Component({
  selector: 'app-change-title',
  imports: [CommonModule, ChangeTitleItemComponent],
  templateUrl: './change-title.component.html',
  styleUrl: './change-title.component.css'
})
export class ChangeTitleComponent {

  cards: Card[] = [
    {
      btnColor: "blue",
      title: "Learn Angular",
      body: "Angular is a powerful front-end framework for building dynamic web applications. It features components, services, and dependency injection for scalability. Start with its basics to build robust, maintainable applications. Explore the structure and architecture, then dive into advanced topics like routing and state management. With Angular, you can create seamless user experiences and highly interactive web interfaces.",
      id: 1,
    },
    {
      btnColor: "green",
      title: "Master TypeScript",
      body: "TypeScript enhances JavaScript by adding strong typing, interfaces, and better error checking. It’s essential for writing clean and efficient Angular code. Focus on learning generics, decorators, and modules to create reusable components. With TypeScript, your code becomes easier to debug, refactor, and maintain. It’s a key skill for mastering Angular development and improving productivity.",
      id: 2,
    },
    {
      btnColor: "orange",
      title: "Build Projects",
      body: "Practical experience is the best way to master Angular. Start small by creating basic CRUD apps, then move to complex features like authentication, lazy loading, and animations. Work on real-world projects to solidify your understanding. Building projects helps you learn how to solve common problems and design scalable, maintainable applications.",
      id: 3,
    },
    {
      btnColor: "red",
      title: "Join the Community",
      body: "Angular has a vibrant developer community that provides support, tools, and libraries to enhance your learning. Participate in forums, attend webinars, and contribute to open-source projects. Joining the community helps you stay updated with the latest features and best practices. It’s a great way to network and grow as an Angular developer.",
      id: 4,
    },

  ];

  titleColor = 'black'

  handleClick(color: string){
    this.titleColor = color;
  }



}
export interface Card{
  btnColor: string; 
  title: string; 
  body: string;
  id: number;
}
