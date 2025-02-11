import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import axios from 'axios';

@Injectable({ providedIn: 'root' })
export class DataImportService {

  constructor() {}

  public importExcel(file: File): void {
    const fileReader = new FileReader();
    fileReader.onload = (e: any) => {
      const arrayBuffer = e.target.result;
      const workbook = XLSX.read(arrayBuffer, { type: 'buffer' });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];

      if (!worksheet) {
        console.error('Worksheet not found');
        return;
      }

      const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      console.log('Raw data from Excel:', json);

      this.processData(json as any[][]);
    };
    fileReader.readAsArrayBuffer(file);
  }

  private processData(data: any[][]): void {
    if (!data || data.length === 0) {
      console.error('No data found');
      return;
    }

    const headers = data[0].map((header: string) => header.toLowerCase());
    const rows = data.slice(1);

    const normalizedData = rows.map(row => {
      if (!row || row.length === 0) {
        console.warn('Skipping empty row');
        return null;
      }

      const obj: { [key: string]: any } = {};
      headers.forEach((header, index) => {
        obj[header] = row[index];
      });

      return obj;
    }).filter(row => row !== null).map(obj => {
      const name = obj['name'] || '';
      const updated_at = this.parseDate(obj['updatedon'] || obj['updated_on']);
      const prices = (obj['prices'] || '').toString().replace(/,/g, '.').split(';').map((price: string) => Number(price) < 0 ? 0 : Number(price));
      const rate = Number(obj['rate %'] || obj['rate']);
      const category = name.toLowerCase().includes('equipment') ? 'equipment' : 'product';

      return { name, updated_at, prices, rate, category };
    });

    console.log('Normalized data:', normalizedData);

    // Supprimer les doublons en conservant la dernière occurrence
    const uniqueData = Array.from(new Map(normalizedData.map(item => [item.name, item])).values());

    console.log('Unique data:', uniqueData); // Log unique data

    this.sendDataToBackend(uniqueData);
  }

  private parseDate(dateStr: string): string {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) {
      console.warn(`Invalid date: ${dateStr}`);
      return 'Invalid Date';
    }
    return date.toISOString().split('T')[0];
  }

  private async sendDataToBackend(data: any[]): Promise<void> {
    try {
      console.log('Sending data to backend:', data); // Log data being sent
      await axios.post('http://localhost:3000/kraken', data);
      console.log('Data sent successfully');
    } catch (error) {
      console.error('Error sending data:', error);
    }
  }
}