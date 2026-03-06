import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

// මෙය අලුතින් එකතු කරන්න
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-stays-form-component',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatMenuModule // මෙතැනට ඇතුළත් කරන්න
  ],
  templateUrl: './stays-form-component.html',
  styleUrl: './stays-form-component.scss',
})
export class StaysFormComponent {}
