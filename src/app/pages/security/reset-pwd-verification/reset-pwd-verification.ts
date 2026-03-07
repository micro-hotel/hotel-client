import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
// Ensure ActivatedRoute and ParamMap are used correctly
import { RouterLink, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-reset-pwd-verification',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    RouterLink
    ],
  templateUrl: './reset-pwd-verification.html',
  styleUrl: './reset-pwd-verification.scss',
})
export class ResetPwdVerification {

}
