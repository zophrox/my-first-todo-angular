import { Component, OnInit } from "@angular/core";
import { DataTask } from "src/app/shared/dataTask.model";
import { DataService } from "src/app/shared/data.service";

@Component({
  selector: "app-to-call",
  templateUrl: "./to-call.component.html",
  styleUrls: ["./to-call.component.scss"],
})
export class ToCallComponent implements OnInit {
  callData: DataTask[];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.callData = this.dataService.getDataCall();
    this.dataService.toDataChanges.subscribe((dataTask: DataTask[]) => {
      this.callData = dataTask;
    });
  }
}
