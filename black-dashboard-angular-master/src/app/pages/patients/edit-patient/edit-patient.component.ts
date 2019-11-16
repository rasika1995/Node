import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from "@angular/router";
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {Patient} from '../../../patient.model';
import { PatientService } from '../../../service/patient.service';
import { FormArray,FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.scss']
})




export class EditPatientComponent implements OnInit {

  id: String;
  patient:any={};

  updateForm:FormGroup;


  constructor(private patientService:PatientService,private router:Router,private route:ActivatedRoute,private fb:FormBuilder) { 
    this.createForm();

  }

  createForm(){
    this.updateForm=this.fb.group({
      reg_No:['',Validators.required],
      faculty:['',Validators.required],
      date:'',
      name:['',Validators.required],
      raddress:'',
      address:'',
      dob:'',
      sex:'',
      marital_status:'',
      last_school_attend:'',
      parent:this.fb.group({
        parentName:'',
        pmobile_No:'',
        paddress:''
      }),
      diseases:[''],
      operation:'',
      mentioned_problem:'', 
      
    });
  }



  ngOnInit() {

    this.route.params.subscribe(params=>{
      this.id = params.id;
      this.patientService.getPatientById(this.id).subscribe(res=>{
        this.patient = res;
       
        this.updateForm.get('reg_No').setValue(this.patient.reg_No);
        this.updateForm.get('faculty').setValue(this.patient.faculty);
        this.updateForm.get('date').setValue(this.patient.date);
        this.updateForm.get('name').setValue(this.patient.name);
        this.updateForm.get('raddress').setValue(this.patient.raddress);
        this.updateForm.get('address').setValue(this.patient.address);
        this.updateForm.get('dob').setValue(this.patient.dob);
        this.updateForm.get('sex').setValue(this.patient.sex);
        this.updateForm.get('marital_status').setValue(this.patient.marital_status);
        this.updateForm.get('last_school_attend').setValue(this.patient.last_school_attend);
        this.updateForm.get('parent').setValue(this.patient.parent);
        this.updateForm.get('diseases').setValue(this.patient.diseases);
        this.updateForm.get('operation').setValue(this.patient.operation);
        this.updateForm.get('mentioned_problem').setValue(this.patient.mentioned_problem);
      
      });
    });
  }
  

 
  
  updatePatient(reg_No,faculty,date,name,raddress,address,dob,sex,marital_status,last_school_attend,parent,diseases,operation,mentioned_problem){

    let Form = JSON.stringify(this.updateForm.value);
    console.log(Form);
    this.patientService.updatePatient(this.id,Form).subscribe(()=>{
      this.router.navigate(['/patient']);
    });

  }
}


