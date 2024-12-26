import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SheetData } from '../../components/wailing-file-selector/wailing-file-selector.component';

@Injectable({
  providedIn: 'root',
})
export class WailingMessageBrokerService {
  private dataSource = new BehaviorSubject<SheetData>({
    data: [],
    year: 0,
    version: 0,
    initialBalance: 0,
  });
  currentData = this.dataSource.asObservable();

  constructor() {}

  changeData(data: SheetData): void {
    this.dataSource.next(data);
  }
}
