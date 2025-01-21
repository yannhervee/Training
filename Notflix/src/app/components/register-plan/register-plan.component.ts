import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms';
import { passwordValidator } from '../../validators/password-validator';
import { RouterLink, Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PlanListComponent } from './plan-list/plan-list.component';
import { RegistrationService } from '../../../services/registration.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register-plan',
  imports: [CommonModule, PlanListComponent],
  templateUrl: './register-plan.component.html',
  styleUrl: './register-plan.component.css'
})
export class RegisterPlanComponent {
  selectedRole: string ='';

  constructor(private router: Router, 
    private registerService: RegistrationService, 
    private authService: AuthService) {}

  roles = [
    {
      name: 'Standard with ads',
      resolution: '1080p',
      price: '$6.99',
      quality: 'Good',
      devices: 'TV, computer, mobile phone, tablet',
      ads: 'Less than you might think',
    },
    {
      name: 'Standard',
      resolution: '1080p',
      price: '$15.49',
      quality: 'Good',
      devices: 'TV, computer, mobile phone, tablet',
      ads: 'No ads',
    },
    {
      name: 'Premium',
      resolution: '4K + HDR',
      price: '$22.99',
      quality: 'Best',
      devices: 'TV, computer, mobile phone, tablet',
      ads: 'No ads',
    },
  ];

  onSelected(role: string){
    this.selectedRole = role;
    console.log("selected role ", this.selectedRole);
  }

  proceedToNextStep() {
    if (this.selectedRole) {
      console.log(`Proceeding with role: ${this.selectedRole}`);
      this.registerService.setUserRole(this.selectedRole);
      
      const { email, password, role, username } = this.registerService.getFinalData();

      this.authService.register(username, email, password, this.selectedRole);  
      
    } else {
      alert('Please select a plan to continue!');
    }
  }
}
