import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
// Ensure ActivatedRoute and ParamMap are used correctly
import { RouterLink, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-register-verification',
  standalone: true, // Ensure standalone is true if you aren't using NgModules
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    RouterLink
    ],
  templateUrl: './register-verification.html',
  styleUrl: './register-verification.scss',
})
export class RegisterVerification implements OnInit {

  email: string | null = null;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // Corrected the arrow function syntax: (resp: ParamMap) => { ... }
    this.activatedRoute.paramMap.subscribe((resp: ParamMap) => {
      this.email = resp.get('email');
      console.log('Received email:', this.email);
    });
  }
}
