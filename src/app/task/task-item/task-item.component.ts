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
