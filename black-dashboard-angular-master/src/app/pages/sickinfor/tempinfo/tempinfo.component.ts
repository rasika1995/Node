import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute} from "@angular/router";
import {FormGroup,FormBuilder,Validators} from '@angular/forms';

import { PatientService } from '../../../service/patient.service';
import { SickinfoService } from '../../../service/sickinfo.service';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-tempinfo',
  templateUrl: './tempinfo.component.html',
  styleUrls: ['./tempinfo.component.scss']
})
export class TempinfoComponent implements OnInit {
  id: String;
  patient:any={};

  tempForm:FormGroup;

  constructor(private patientService:PatientService,private sickinfoService:SickinfoService,private router:Router,private route:ActivatedRoute,private fb:FormBuilder) { 
    this.createForm();
  }

  createForm(){
    this.tempForm=this.fb.group({
      reg_no:[],
      info:this.fb.group({
        date:'',
        feaver:'',
        sickness:[''],
        prescription:[''],
      }),
      
    });
  }
  ngOnInit() {
    this.route.params.subscribe(params=>{
          this.id = params.id;
          this.patientService.getPatientById(this.id).subscribe(res=>{
            this.patient = res;
            this.tempForm.get('reg_no').setValue(this.patient.reg_No);
          });
        }); 


  }

  

  addTemp(reg_no,info){
    let Form = JSON.stringify(this.tempForm.value);
    console.log(Form);
    this.sickinfoService.addTemp(Form).subscribe((res)=>{
      console.log(res);
     // this.router.navigate(['/patient']);
    });
   
   
    
  }

}
