import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data';

@Component({
  selector: 'app-distribution',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './distribution.html',
  styleUrl: './distribution.scss'
})
export class Distribution {
  constructor(public data: DataService) {}
  filter = 'All';
  filters = ['All','Delivered','Dispatched','Manufacturing','Pending'];
  get orders() {
    if (this.filter === 'All') return this.data.spectacleOrders;
    return this.data.spectacleOrders.filter(o => o.status === this.filter);
  }
  statusClass(s: string) {
    return { 'Delivered':'badge-green','Dispatched':'badge-blue','Manufacturing':'badge-orange','Pending':'badge-red' }[s] || '';
  }
  withinTarget(days: number) { return days <= 21; }
}
