import { Injectable } from '@angular/core';

export interface District {
  name: string; screened: number; spectacles: number; referrals: number; target: number;
}
export interface Referral {
  id: string; patient: string; age: number; district: string;
  type: string; hospital: string; status: string; date: string;
}
export interface SpectacleOrder {
  id: string; patient: string; district: string; power: string;
  type: string; status: string; days: number; date: string;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  districts: District[] = [
    {name:'Srikakulam',screened:12840,spectacles:8920,referrals:310,target:18000},
    {name:'Vizianagaram',screened:14200,spectacles:10100,referrals:280,target:19000},
    {name:'Visakhapatnam',screened:28600,spectacles:21400,referrals:520,target:35000},
    {name:'Alluri Sitharama Raju',screened:9100,spectacles:6200,referrals:190,target:14000},
    {name:'Anakapalli',screened:11300,spectacles:7800,referrals:240,target:16000},
    {name:'Kakinada',screened:16700,spectacles:12300,referrals:350,target:22000},
    {name:'East Godavari',screened:19400,spectacles:14100,referrals:410,target:26000},
    {name:'Konaseema',screened:10200,spectacles:7400,referrals:200,target:15000},
    {name:'Eluru',screened:13100,spectacles:9700,referrals:260,target:18000},
    {name:'West Godavari',screened:17900,spectacles:13200,referrals:380,target:24000},
    {name:'NTR Krishna',screened:20100,spectacles:15600,referrals:420,target:28000},
    {name:'Krishna',screened:18500,spectacles:13900,referrals:390,target:25000},
    {name:'Palnadu',screened:11800,spectacles:8100,referrals:230,target:16500},
    {name:'Guntur',screened:22300,spectacles:17200,referrals:480,target:30000},
    {name:'Bapatla',screened:10600,spectacles:7300,referrals:210,target:15000},
    {name:'Nandyal',screened:12400,spectacles:8700,referrals:270,target:17000},
    {name:'Kurnool',screened:16200,spectacles:11900,referrals:340,target:22000},
    {name:'Anantapur',screened:15800,spectacles:11400,referrals:320,target:21000},
    {name:'Sri Sathya Sai',screened:9700,spectacles:6900,referrals:185,target:14000},
    {name:'YSR Kadapa',screened:14900,spectacles:10800,referrals:300,target:20000},
    {name:'Prakasam',screened:16100,spectacles:11600,referrals:330,target:22000},
    {name:'SPSR Nellore',screened:17200,spectacles:12500,referrals:360,target:23000},
    {name:'Chittoor',screened:15600,spectacles:11200,referrals:315,target:21000},
    {name:'Tirupati',screened:14100,spectacles:10300,referrals:290,target:19000},
    {name:'Annamamaya',screened:8900,spectacles:6100,referrals:170,target:13000},
    {name:'Nandyal New',screened:7200,spectacles:4900,referrals:140,target:11000},
  ];

  referrals: Referral[] = [
    {id:'REF-001',patient:'Ravi Kumar',age:52,district:'Visakhapatnam',type:'Cataract',hospital:'Regional Eye Hospital',status:'Pending',date:'2026-05-05'},
    {id:'REF-002',patient:'Lakshmi Devi',age:67,district:'Guntur',type:'Glaucoma',hospital:'Govt. General Hospital',status:'Completed',date:'2026-05-04'},
    {id:'REF-003',patient:'Srinivas Rao',age:34,district:'Kurnool',type:'High Power (>6D)',hospital:'AH District Hospital',status:'In Transit',date:'2026-05-04'},
    {id:'REF-004',patient:'Priya Anand',age:8,district:'SPSR Nellore',type:'ROP Evaluation',hospital:'Nellore TH',status:'Pending',date:'2026-05-03'},
    {id:'REF-005',patient:'Mohammed Salim',age:45,district:'Kakinada',type:'Fundus Evaluation',hospital:'KGH Visakhapatnam',status:'Completed',date:'2026-05-02'},
    {id:'REF-006',patient:'Sarada Devi',age:71,district:'Chittoor',type:'Cataract',hospital:'Tirupati DH',status:'Scheduled',date:'2026-05-06'},
  ];

  spectacleOrders: SpectacleOrder[] = [
    {id:'SPE-2024',patient:'Arjun Reddy',district:'Guntur',power:'R:-2.00/-0.50×90 L:-1.75/-0.25×85',type:'Single Vision Distance',status:'Delivered',days:12,date:'2026-04-24'},
    {id:'SPE-2025',patient:'Vimala Kumari',district:'Kurnool',power:'R:+1.50 L:+1.25',type:'Bifocal',status:'Manufacturing',days:8,date:'2026-04-28'},
    {id:'SPE-2026',patient:'Narayana Rao',district:'Srikakulam',power:'R:-5.50/-1.00×180 L:-6.00/-0.75×175',type:'Single Vision Distance',status:'Dispatched',days:18,date:'2026-04-18'},
    {id:'SPE-2027',patient:'Kamala Devi',district:'Vizianagaram',power:'Add:+2.00 OU',type:'Single Vision Near',status:'Delivered',days:9,date:'2026-04-27'},
    {id:'SPE-2028',patient:'Peddiraju',district:'East Godavari',power:'R:+3.00/-2.00×70 L:+2.50/-1.75×65',type:'Single Vision Distance',status:'Pending',days:2,date:'2026-05-04'},
  ];

  getTotals() {
    return {
      screened: this.districts.reduce((a,d) => a+d.screened, 0),
      spectacles: this.districts.reduce((a,d) => a+d.spectacles, 0),
      referrals: this.districts.reduce((a,d) => a+d.referrals, 0),
      districts: this.districts.length
    };
  }

  monthlyLabels = ['Nov','Dec','Jan','Feb','Mar','Apr','May'];
  monthlyScreenings = [18200,22400,31600,38900,45200,51800,58400];
  monthlySpectacles = [12100,15800,22300,28100,33600,39400,44200];

  diagnoses = [
    'Myopia','Hyperopia','Astigmatism','Presbyopia','Myopic Astigmatism',
    'Hyperopic Astigmatism','Mixed Astigmatism','Cataract (Early)','Cataract (Mature)',
    'Glaucoma (Suspect)','Age-related Macular Degeneration','Diabetic Retinopathy',
    'Hypertensive Retinopathy','Squint / Strabismus','Amblyopia','Dry Eye Syndrome',
    'Pterygium','Conjunctivitis (Chronic)','Normal – No Refractive Error','Other (specify in remarks)'
  ];
}
