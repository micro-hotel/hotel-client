
import { Component } from '@angular/core';
// 1. Import the necessary Material Modules
import { FormControl, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-reset-pwd',
  imports: [
         ReactiveFormsModule,
            MatFormFieldModule,
            MatInputModule,
            MatButtonModule,
            MatCheckboxModule,
            FormsModule,
            RouterLink
    ],
  templateUrl: './reset-pwd.html',
  styleUrl: './reset-pwd.scss',
})
export class ResetPwd {
   // Your logic for email and updateErrorMessage() goes here
      email = new FormControl('', [Validators.required, Validators.email]);

      errorMessage() {
        // ... logic
      }
      showStatus:boolean = false;
}
