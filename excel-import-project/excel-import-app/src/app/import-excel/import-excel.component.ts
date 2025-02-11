import { Component } from '@angular/core';
import { DataImportService } from '../data-import.service';

@Component({
  selector: 'app-import-excel',
  templateUrl: './import-excel.component.html',
  styleUrls: ['./import-excel.component.css']
})
export class ImportExcelComponent {
  selectedFile: File | null = null;

  constructor(private dataImportService: DataImportService) {}

  onFileSelected(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    } else {
      console.error('No file selected');
      this.selectedFile = null;
    }
  }

  onImportClick(): void {
    if (this.selectedFile) {
      this.dataImportService.importExcel(this.selectedFile);
    } else {
      console.error('Aucun fichier sélectionné');
    }
  }
}