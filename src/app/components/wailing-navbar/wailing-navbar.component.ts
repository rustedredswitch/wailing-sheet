import { Component, inject, model, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { WailingFileSelectorComponent } from '../wailing-file-selector/wailing-file-selector.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-wailing-navbar',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './wailing-navbar.component.html',
  styleUrl: './wailing-navbar.component.scss',
})
export class WailingNavbarComponent {
  readonly dialog = inject(MatDialog);

  onUploadClick() {
    const dialogRef = this.dialog.open(WailingFileSelectorComponent, {});
  }
}
