import { Component, inject, model, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DialogData, WailingFileSelectorComponent } from '../wailing-file-selector/wailing-file-selector.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-wailing-navbar',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './wailing-navbar.component.html',
  styleUrl: './wailing-navbar.component.scss',
})
export class WailingNavbarComponent {
  readonly path = signal('');
  readonly dialog = inject(MatDialog);

  onUploadClick() {
    const dialogRef = this.dialog.open(WailingFileSelectorComponent, {
      data: { path: this.path() },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        console.log(result)
        this.path.set(result);
      }
    });
  }
}
