import { Component, OnInit } from "@angular/core";
import { DataTask } from "../shared/dataTask.model";
import { DataService } from "../shared/data.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.scss"],
})
export class AddTaskComponent implements OnInit {
  dataTask: DataTask;
  descriptionTask: string;
  descriptionTaskTime: string;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}
  addNewTask(descriptionTask: string, descriptionTaskTime: string) {
    this.dataTask = new DataTask(
      descriptionTask,
      descriptionTaskTime,
      undefined
    );
    if (this.route.snapshot.fragment === "buy") {
      this.dataService.addNewTaskBuy(this.dataTask);
    }
    if (this.route.snapshot.fragment === "do") {
      this.dataService.addNewTaskToDo(this.dataTask);
    }
    if (this.route.snapshot.fragment === "call") {
      this.dataService.addNewTaskCall(this.dataTask);
    }
  }
}
