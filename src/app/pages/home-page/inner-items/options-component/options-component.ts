import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import {StaysContextComponent} from "../stays-context-component/stays-context-component";
@Component({
  selector: 'app-options-component',
  imports: [MatTabsModule, StaysContextComponent] ,
  templateUrl: './options-component.html',
  styleUrl: './options-component.scss',
})
export class OptionsComponent {

}
