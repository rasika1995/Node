import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule,Routes } from '@angular/router';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';


import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { PatientComponent } from '../../pages/patients/patient/patient.component';
import { MedicalreportComponent } from '../../pages/medicalreport/medicalreport.component';
import { EditPatientComponent } from '../../pages/patients/edit-patient/edit-patient.component';
import { AddPatientComponent } from '../../pages/patients/add-patient/add-patient.component';
import { RasikaComponent } from '../../pages/rasika/rasika.component';
import { TempinfoComponent } from '../../pages/sickinfor/tempinfo/tempinfo.component';
// import { RtlComponent } from "../../pages/rtl/rtl.component";


import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    }),
    
    

  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    MapComponent,
    MedicalreportComponent,
    PatientComponent,
    EditPatientComponent,
    AddPatientComponent,
    RasikaComponent,
    TempinfoComponent

    // RtlComponent
  ]
})
export class AdminLayoutModule {}
