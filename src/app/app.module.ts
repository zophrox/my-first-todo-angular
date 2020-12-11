import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ToBuyComponent } from "./task/to-buy/to-buy.component";
import { ToDoComponent } from "./task/to-do/to-do.component";
import { ToCallComponent } from "./task/to-call/to-call.component";
import { CostsComponent } from "./task/costs/costs.component";
import { TaskItemComponent } from "./task/task-item/task-item.component";
import { AppRoutingModule } from "./app-routing.module";
import { SportComponent } from "./sport/sport.component";
import { StartComponent } from "./start/start.component";

import { DataService } from "./shared/data.service";
import { AddTaskComponent } from "./add-task/add-task.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToBuyComponent,
    ToDoComponent,
    ToCallComponent,
    CostsComponent,
    TaskItemComponent,
    SportComponent,
    StartComponent,
    AddTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
