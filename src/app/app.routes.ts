import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { EmrForm } from './components/emr-form/emr-form';
import { DistrictView } from './components/district-view/district-view';
import { Distribution } from './components/distribution/distribution';
import { Referrals } from './components/referrals/referrals';
import { Reports } from './components/reports/reports';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'emr', component: EmrForm },
  { path: 'districts', component: DistrictView },
  { path: 'distribution', component: Distribution },
  { path: 'referrals', component: Referrals },
  { path: 'reports', component: Reports },
];
