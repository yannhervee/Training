import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-plan-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './plan-list.component.html',
  styleUrl: './plan-list.component.css'
})
export class PlanListComponent {
  @Input() roles: any[] = []; 
  @Output() roleSelected = new EventEmitter<string>(); 

  selectedRole: string = '';


  selectRole(role: string) {
    this.selectedRole = role;

    if(role === "Standard with ads"){
      this.roleSelected.emit('USER'); 
    }else if(role ==="Standard"){
      this.roleSelected.emit('SUPERUSER'); 
    }
    else{
      this.roleSelected.emit('ADMIN'); 
    }
    
  }
}
