import { Component, OnInit } from "@angular/core";
import { DataTask } from "../../shared/dataTask.model";
import { DataService } from "src/app/shared/data.service";

@Component({
  selector: "app-to-do",
  templateUrl: "./to-do.component.html",
  styleUrls: ["./to-do.component.scss"],
})
export class ToDoComponent implements OnInit {
  toDoTask: DataTask[];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.toDoTask = this.dataService.getDataToDo();
    this.dataService.toDataChanges.subscribe((dataTask: DataTask[]) => {
      this.toDoTask = dataTask;
    });
  }
}
