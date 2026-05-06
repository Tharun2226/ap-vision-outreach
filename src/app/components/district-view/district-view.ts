import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, District } from '../../services/data';

@Component({
  selector: 'app-district-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './district-view.html',
  styleUrl: './district-view.scss'
})
export class DistrictView {
  selected: District | null = null;
  constructor(public data: DataService) {}

  select(d: District) { this.selected = d; }
  pct(d: District) { return Math.round((d.screened / d.target) * 100); }
  spPct(d: District) { return Math.round((d.spectacles / d.screened) * 100); }
  getColor(p: number) { return p >= 75 ? '#00d4aa' : p >= 50 ? '#f7a94f' : '#f75f5f'; }
}
