import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { PatientService } from '../../../service/patient.service';
import { FormArray } from '@angular/forms';
import { Router, ActivatedRoute} from "@angular/router";
import {Patient} from '../../../patient.model';
import { first } from 'rxjs/operators';




@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})




export class AddPatientComponent implements OnInit {

  createForm:FormGroup;
 

  constructor(private patientService:PatientService, private fb:FormBuilder, private router:Router) { 
    this.createForm=this.fb.group({
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
    
    
  }

  
  addPatient(reg_No,faculty,date,name,raddress,address,dob,sex,marital_status,last_school_attend,parent,diseases,operation,mentioned_problem){
    let Form = JSON.stringify(this.createForm.value);
    console.log(Form);
    this.patientService.addPatient(Form).subscribe(()=>{
      //console.log(res);
      this.router.navigate(['/patient']);
    });
   
   
    
  }
  

}





