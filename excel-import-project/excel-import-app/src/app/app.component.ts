import { Component } from '@angular/core';
import { ImportExcelComponent } from './import-excel/import-excel.component';


@Component({
  selector: 'app-root',
  template: `<app-import-excel></app-import-excel>`,
  styleUrls: ['./app.component.css'],
  imports: [ImportExcelComponent]
})
export class AppComponent {
  title = 'excel-import-app';
}