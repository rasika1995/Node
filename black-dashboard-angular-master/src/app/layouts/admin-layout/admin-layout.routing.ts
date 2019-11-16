import { Routes } from "@angular/router";


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

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  { path: "medireport", component: MedicalreportComponent },
  { path: "patient", component : PatientComponent},
  { path: "patient/edit/:id", component : EditPatientComponent},
  {path : 'patient/add',component : AddPatientComponent},
  {path : 'rasika',component : RasikaComponent},
  {path : 'tempinfo/:id',component: TempinfoComponent},
  // { path: "rtl", component: RtlComponent }
];
