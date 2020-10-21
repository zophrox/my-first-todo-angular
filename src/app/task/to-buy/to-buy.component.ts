import { Component, OnInit } from "@angular/core";

import { DataTask } from "../../shared/dataTask.model";
import { DataService } from "src/app/shared/data.service";

@Component({
  selector: "app-to-buy",
  templateUrl: "./to-buy.component.html",
  styleUrls: ["./to-buy.component.scss"],
})
export class ToBuyComponent implements OnInit {
  buyTask: DataTask[];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.buyTask = this.dataService.getDataBuy();
    this.dataService.toDataChanges.subscribe((dataTask: DataTask[]) => {
      this.buyTask = dataTask;
    });
  }
}
