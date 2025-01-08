import { Injectable } from '@angular/core';
import * as Papa from 'papaparse';
import { Observable } from 'rxjs';
import { SheetData } from '../../components/wailing-file-selector/wailing-file-selector.component';

@Injectable({
  providedIn: 'root',
})
export class WailingImporterV1Service {
  constructor() {}

  parseSheet(file: File): Observable<SheetData> {
    return new Observable((observer) => {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const parsedData: any[] = Papa.parse(event.target.result, {
          header: true,
          skipEmptyLines: true,
        }).data;

        const metadata: any = parsedData.pop();

        const sheetData: SheetData = {
          data: parsedData,
          version: metadata.January? metadata.January : 0,
          year: metadata.February? metadata.February : 0,
          initialBalance: metadata.March? metadata.March : 0,
        };

        observer.next(sheetData);
        observer.complete();
      };
      reader.onerror = (error) => {
        observer.error(error);
      };
      reader.readAsText(file);
    });
  }
}
