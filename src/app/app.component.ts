import { Component } from '@angular/core';
import { WailingNavbarComponent } from './components/wailing-navbar/wailing-navbar.component';
import { WailingTableComponent } from './components/wailing-table/wailing-table.component';

@Component({
  selector: 'app-root',
  imports: [WailingNavbarComponent, WailingTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'wailing-sheet';
}
