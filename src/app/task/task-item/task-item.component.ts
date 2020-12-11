import { Component, OnInit, Input, AfterContentChecked } from "@angular/core";
import { DataTask } from "../../shared/dataTask.model";

import { DataService } from "src/app/shared/data.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-task-item",
  templateUrl: "./task-item.component.html",
  styleUrls: ["./task-item.component.scss"],
})
export class TaskItemComponent implements OnInit {
  @Input() taskData: DataTask;
  @Input() id: number;

  lineThrough: boolean;
  edit: boolean = false;
  sizeInput: number;
  editText: string;
  time: string;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}
  checkValue(e: any) {
    e.target.checked ? (this.lineThrough = true) : (this.lineThrough = false);

    this.taskData.readyTime = new Date();
  }

  ngOnInit() {}
  editTask() {
    this.edit = !this.edit;
    this.sizeInput = this.taskData.text.length;
  }
  editTextTask(text: string, time: string) {
    this.edit = !this.edit;
    if (this.route.snapshot.fragment === "buy") {
      this.dataService.editTaskBuy(text, time, this.id);
    }
    if (this.route.snapshot.fragment === "do") {
      this.dataService.editTaskToDo(text, time, this.id);
    }
    if (this.route.snapshot.fragment === "call") {
      this.dataService.editTaskCall(text, time, this.id);
    }
  }
  removeTask() {
    if (this.route.snapshot.fragment === "do") {
      this.dataService.deleteTaskToDo(this.id);
    }
    if (this.route.snapshot.fragment === "buy") {
      this.dataService.deleteTaskBuy(this.id);
    }
    if (this.route.snapshot.fragment === "call") {
      this.dataService.deleteTaskCall(this.id);
    }
  }
}
