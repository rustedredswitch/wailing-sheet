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

        const sheetData: SheetData = {
          data: parsedData,
          year: parsedData[1].Metadata,
          version: parsedData[0].Metadata,
          initialBalance: parsedData[2].Metadata,
        };

        delete sheetData.data[0].Metadata;
        delete sheetData.data[1].Metadata;
        delete sheetData.data[2].Metadata;

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
