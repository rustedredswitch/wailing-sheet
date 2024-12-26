import { Component, inject, model, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { WailingImporterV1Service } from '../../services/wailing-importer/wailing-importer-v1.service';
import { WailingMessageBrokerService } from '../../services/wailing-message-broker/wailing-message-broker.service';

export interface SheetData {
  data: any[];
  year: number;
  version: number;
  initialBalance: number;
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
  ],
  templateUrl: './wailing-file-selector.component.html',
  styleUrl: './wailing-file-selector.component.scss',
})
export class WailingFileSelectorComponent {
  readonly dialogRef = inject(MatDialogRef<WailingFileSelectorComponent>);
  protected fileName = 'Select File';
  private sheetData?: SheetData;

  constructor(
    private importer: WailingImporterV1Service,
    private messageBroker: WailingMessageBrokerService
  ) {}

  onFileSelected(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.fileName = event.target.files[0].name;
      this.importer.parseSheet(event.target.files[0]).subscribe({
        next: (data) => {
          this.sheetData = data;
          console.log(data);
        },
        error: (error) => {
          console.error('Errore nel caricamento del file CSV', error);
        },
      });
    } else {
      this.fileName = 'Select File';
    }
  }

  onOkClick() {
    if (this.sheetData) this.messageBroker.changeData(this.sheetData);
    this.dialogRef.close();
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
