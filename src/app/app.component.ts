import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WailingNavbarComponent } from "./components/wailing-navbar/wailing-navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WailingNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wailing-sheet';
}
