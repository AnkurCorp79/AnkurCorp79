import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { GamesDashboard } from "src/app/pages/gamesDashboard/gamesDashboard.component";
import { GameDetailsDashboard } from "src/app/pages/gamesDetails/gamesDetails.component";
import { NgxSliderModule } from '@angular-slider/ngx-slider';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgxSliderModule
  ],
  declarations: [
    GamesDashboard,
    GameDetailsDashboard
  ]
})
export class AdminLayoutModule {}
