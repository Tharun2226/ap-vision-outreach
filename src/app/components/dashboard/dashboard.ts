import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit, AfterViewInit {
  @ViewChild('trendChart') trendChartRef!: ElementRef;
  @ViewChild('typeChart') typeChartRef!: ElementRef;
  @ViewChild('distChart') distChartRef!: ElementRef;

  totals: any = {};
  topDistricts: any[] = [];

  constructor(public data: DataService) {}

  ngOnInit() {
    this.totals = this.data.getTotals();
    this.topDistricts = [...this.data.districts]
      .sort((a,b) => b.screened - a.screened).slice(0,8);
  }

  ngAfterViewInit() {
    this.buildTrendChart();
    this.buildTypeChart();
    this.buildDistChart();
  }

  buildTrendChart() {
    new Chart(this.trendChartRef.nativeElement, {
      type: 'line',
      data: {
        labels: this.data.monthlyLabels,
        datasets: [
          {
            label: 'Screenings',
            data: this.data.monthlyScreenings,
            borderColor: '#1b3d35', backgroundColor: 'rgba(27,61,53,0.08)',
            fill: true, tension: 0.4, pointBackgroundColor: '#1b3d35', pointRadius: 5,
          },
          {
            label: 'Spectacles Distributed',
            data: this.data.monthlySpectacles,
            borderColor: '#f07020', backgroundColor: 'rgba(240,112,32,0.06)',
            fill: true, tension: 0.4, pointBackgroundColor: '#f07020', pointRadius: 5,
          }
        ]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { labels: { color: '#475569', font: { size: 12, family: 'DM Sans' } } } },
        scales: {
          x: { ticks: { color: '#94a3b8', font: { family: 'DM Sans' } }, grid: { color: '#e4ddd2' } },
          y: { ticks: { color: '#94a3b8', font: { family: 'DM Sans' } }, grid: { color: '#e4ddd2' } }
        }
      }
    });
  }

  buildTypeChart() {
    new Chart(this.typeChartRef.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Myopia','Presbyopia','Astigmatism','Cataract','Other'],
        datasets: [{
          data: [38,26,18,12,6],
          backgroundColor: ['#1b3d35','#2d5a4e','#f07020','#e8a87c','#a0c4b8'],
          borderWidth: 2,
          borderColor: '#ffffff'
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { position: 'bottom', labels: { color: '#475569', font: { size: 11, family: 'DM Sans' }, padding: 12 } } }
      }
    });
  }

  buildDistChart() {
    new Chart(this.distChartRef.nativeElement, {
      type: 'bar',
      data: {
        labels: this.topDistricts.map(d => d.name.split(' ')[0]),
        datasets: [{
          label: 'Screened',
          data: this.topDistricts.map(d => d.screened),
          backgroundColor: 'rgba(27,61,53,0.75)', borderRadius: 7,
          hoverBackgroundColor: '#f07020'
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { color: '#94a3b8', font: { size: 10, family: 'DM Sans' } }, grid: { color: '#e4ddd2' } },
          y: { ticks: { color: '#94a3b8', font: { family: 'DM Sans' } }, grid: { color: '#e4ddd2' } }
        }
      }
    });
  }

  getProgress(d: any) { return Math.round((d.screened/d.target)*100); }
}
