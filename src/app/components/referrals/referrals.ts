import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data';

@Component({
  selector: 'app-referrals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './referrals.html',
  styleUrl: './referrals.scss'
})
export class Referrals {
  constructor(public data: DataService) {}

  statusClass(s: string) {
    const map: any = { 'Pending':'badge-orange','Completed':'badge-green','In Transit':'badge-blue','Scheduled':'badge-purple' };
    return map[s] || '';
  }

  getIcon(t: string) {
    const map: any = { 'Cataract':'👁️','Glaucoma':'🔍','High Power (>6D)':'🔭','ROP Evaluation':'👶','Fundus Evaluation':'🏥' };
    return map[t] || '🔗';
  }

  get pendingCount() { return this.data.referrals.filter(r => r.status === 'Pending').length; }
  get completedCount() { return this.data.referrals.filter(r => r.status === 'Completed').length; }
}
