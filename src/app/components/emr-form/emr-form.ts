import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data';

@Component({
  selector: 'app-emr-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './emr-form.html',
  styleUrl: './emr-form.scss'
})
export class EmrForm {
  constructor(public data: DataService) {}

  currentStep = 0;
  toast = '';

  steps = [
    { label: 'Patient Info',      icon: 'fa-solid fa-user' },
    { label: 'Complaints',        icon: 'fa-solid fa-comment-medical' },
    { label: 'Visual Acuity',     icon: 'fa-solid fa-eye' },
    { label: 'Refraction & Rx',   icon: 'fa-solid fa-glasses' },
    { label: 'Diagnosis',         icon: 'fa-solid fa-stethoscope' },
    { label: 'Examiner',          icon: 'fa-solid fa-user-doctor' },
  ];

  form: any = {
    // Step 1
    patientName: '', age: '', gender: '', phone: '',
    district: '', village: '', aadhaar: '',
    // Step 2
    complaints: { blur: false, redness: false, watering: false, pain: false, photophobia: false, headache: false, other: '' },
    ocularHistory: { refractive: false, cataract: false, glaucoma: false, trauma: false, surgery: '', contactLens: false },
    medicalHistory: { diabetes: false, hypertension: false, thyroid: false, autoimmune: false, medications: '', allergies: '' },
    // Step 3
    va: { od_ucva: '', od_bcva: '', od_ph: '', os_ucva: '', os_bcva: '', os_ph: '', od_near_ua: '', od_near_corr: '', os_near_ua: '', os_near_corr: '' },
    // Step 4
    obj: { od_sph: '', od_cyl: '', od_axis: '', od_va: '', os_sph: '', os_cyl: '', os_axis: '', os_va: '' },
    subj: { od_sph: '', od_cyl: '', od_axis: '', od_add: '', od_fva: '', os_sph: '', os_cyl: '', os_axis: '', os_add: '', os_fva: '' },
    rx: { od_sph: '', od_cyl: '', od_axis: '', od_add: '', od_pd: '', os_sph: '', os_cyl: '', os_axis: '', os_add: '', os_pd: '' },
    lensType: 'sv_distance',
    // Step 5
    anterior: { lids: '', conjunctiva: '', cornea: '', acDepth: '', iris: '', lens: '' },
    posterior: { opticDisc: '', cdRatio: '', macula: '', vessels: '', retina: '' },
    iop: { od_method: '', od_iop: '', os_method: '', os_iop: '' },
    diagnosis: '', treatment: '', remarks: '',
    // Step 6
    examinerName: '', designation: '',
  };

  districts = [
    'Srikakulam','Vizianagaram','Visakhapatnam','Anakapalli','Kakinada',
    'East Godavari','West Godavari','Guntur','Krishna','SPSR Nellore',
    'Chittoor','Kurnool','Anantapur','YSR Kadapa','Tirupati','Prakasam','Palnadu'
  ];

  get isFirst() { return this.currentStep === 0; }
  get isLast()  { return this.currentStep === this.steps.length - 1; }
  get progress() { return Math.round(((this.currentStep + 1) / this.steps.length) * 100); }

  next() { if (!this.isLast) this.currentStep++; }
  prev() { if (!this.isFirst) this.currentStep--; }
  goTo(i: number) { this.currentStep = i; }

  submitForm() {
    this.toast = '✅ Patient EMR record saved successfully!';
    setTimeout(() => { this.toast = ''; this.currentStep = 0; }, 3500);
  }
}
