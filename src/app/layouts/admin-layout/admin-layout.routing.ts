import { Routes } from "@angular/router";

import { GamesDashboard } from "src/app/pages/gamesDashboard/gamesDashboard.component";
import { GameDetailsDashboard } from "src/app/pages/gamesDetails/gamesDetails.component";

export const AdminLayoutRoutes: Routes = [
  { path: "games", component: GamesDashboard },
  { path: "gameDetails", component: GameDetailsDashboard },
];
