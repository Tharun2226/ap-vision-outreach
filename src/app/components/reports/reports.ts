import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports.html',
  styleUrl: './reports.scss'
})
export class Reports implements OnInit {
  constructor(public data: DataService) {}
  totals: any = {};
  toast = '';

  reportTypes = [
    { icon:'📅', title:'Daily Screening Report', desc:'Patient-wise screening records with VA and prescription data', last:'Today 06:00 AM' },
    { icon:'📊', title:'Weekly District Summary', desc:'District-level screening progress, spectacle delivery status', last:'Mon 06:00 AM' },
    { icon:'📋', title:'Monthly Programme Report', desc:'Complete programme metrics for NHM and State Health officials', last:'01-May-2026' },
    { icon:'👓', title:'Spectacle Distribution Report', desc:'Order-wise delivery status including delayed and pending orders', last:'Today 08:00 AM' },
    { icon:'🔗', title:'Referral Status Report', desc:'All referrals with hospital, status, and patient tracking', last:'Today 07:00 AM' },
    { icon:'🏥', title:'Tele-Ophthalmology Report', desc:'Remote consultation records for complex and high-power cases', last:'Yesterday' },
  ];

  ngOnInit() { this.totals = this.data.getTotals(); }

  download(title: string) {
    this.toast = `📥 "${title}" downloaded successfully!`;
    setTimeout(() => this.toast = '', 3000);
  }
}
