import { Component } from '@angular/core';
import { SheetData } from '../wailing-file-selector/wailing-file-selector.component';
import { WailingMessageBrokerService } from '../../services/wailing-message-broker/wailing-message-broker.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-wailing-table',
  imports: [CommonModule, MatTableModule],
  templateUrl: './wailing-table.component.html',
  styleUrl: './wailing-table.component.scss',
  standalone: true,
})
export class WailingTableComponent {
  sheetData: SheetData = {
    data: [],
    year: 0,
    version: 0,
    initialBalance: 0,
  };

  displayedColumns: string[] = [
    'Wailing',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  constructor(private messageBroker: WailingMessageBrokerService) {}

  ngOnInit() {
    this.messageBroker.currentData.subscribe((data: SheetData) => {
      data.data.push({
        Wailing: 'Profit',
        January: 0,
        February: 0,
        March: 0,
        April: 0,
        May: 0,
        June: 0,
        July: 0,
        August: 0,
        September: 0,
        October: 0,
        November: 0,
        December: 0,
      });
      this.sheetData = data;
    });
  }
}
