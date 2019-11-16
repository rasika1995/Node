import { Component, OnInit,ViewChild } from '@angular/core';
import { PatientService } from '../../../service/patient.service';
import {Router} from '@angular/router';
//import {Patient} from '../../../patient.model';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})

export class PatientComponent implements OnInit {
  public popoverTitle: string = 'Popover title';
  public popoverMessage: string = 'Popover description';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;

constructor(private patientService:PatientService,private router:Router) { }
 patient : any;

  ngOnInit() {
    this.fetchPatients();   
    
  }

  fetchPatients(){
    this.patientService
      .getPatient()
      .subscribe(res=>{
        this.patient = res;
        console.log(res);
      });
  }
  mediPatient(id){
    this.router.navigate([`/patient/medicalreport/${id}`]);
  }

  editPatient(id){
    this.router.navigate([`/patient/edit/${id}`]);
  }
  deletePatient(id){

    
    this.patientService.deletePatient(id).subscribe(()=>{
      this.fetchPatients();
      
    });
  }

  TempsickInfor(id){
    this.router.navigate([`/tempinfo/${id}`]);
  }

}









