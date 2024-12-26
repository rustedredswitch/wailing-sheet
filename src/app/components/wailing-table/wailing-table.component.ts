import { Component } from '@angular/core';
import { SheetData } from '../wailing-file-selector/wailing-file-selector.component';
import { WailingMessageBrokerService } from '../../services/wailing-message-broker/wailing-message-broker.service';

@Component({
  selector: 'app-wailing-table',
  imports: [],
  templateUrl: './wailing-table.component.html',
  styleUrl: './wailing-table.component.scss',
  standalone: true,
})
export class WailingTableComponent {
  sheetData?: SheetData;

  constructor(private messageBroker: WailingMessageBrokerService) {}

  ngOnInit() {
    this.messageBroker.currentData.subscribe((data: SheetData) => {
      this.sheetData = data;
    });
  }
}
