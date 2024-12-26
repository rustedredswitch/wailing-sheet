import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

export interface DialogData {
  path: string;
}

@Component({
  selector: 'app-wailing-file-selector',
  imports: [
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './wailing-file-selector.component.html',
  styleUrl: './wailing-file-selector.component.scss',
})
export class WailingFileSelectorComponent {
  readonly dialogRef = inject(MatDialogRef<WailingFileSelectorComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly path = model(this.data.path);

  currentFile?: File;
  fileName = 'Select File';
  fileContent: string | ArrayBuffer | null = '';

  onFileSelected(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      this.currentFile = file;
      this.fileName = this.currentFile.name;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.fileContent = reader.result;
      };
      reader.readAsText(file);
    } else {
      this.fileName = 'Select File';
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
