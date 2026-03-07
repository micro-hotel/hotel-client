import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
// 1. Import the necessary Material Modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatCheckboxModule,
      FormsModule,
      RouterLink
    ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  // Your logic for email and updateErrorMessage() goes here
  email = new FormControl('', [Validators.required, Validators.email]);

  errorMessage() {
    // ... logic
  }
  showStatus:boolean = false;
}
