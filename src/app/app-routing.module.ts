import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ToDoComponent } from "./task/to-do/to-do.component";
import { ToCallComponent } from "./task/to-call/to-call.component";
import { CostsComponent } from "./task/costs/costs.component";
import { SportComponent } from "./sport/sport.component";

import { ToBuyComponent } from './task/to-buy/to-buy.component';
import { StartComponent } from './start/start.component';
const appRoutes: Routes = [
  { path: "", component: StartComponent },
  { path: "tobuy", component: ToBuyComponent },
  { path: "to-do", component: ToDoComponent },
  
  { path: "to-call", component: ToCallComponent },
  { path: "costs", component: CostsComponent },
  { path: "sport", component: SportComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
