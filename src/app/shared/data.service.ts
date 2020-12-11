import { Injectable } from "@angular/core";
import { DataTask } from "./dataTask.model";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class DataService {
  toDataChanges = new Subject<DataTask[]>();
  toBuyData: DataTask[] = [
    { text: "Купити хліб", time: "14:00", readyTime: undefined },
    { text: "Купити масло", time: "14:30", readyTime: undefined },
    { text: "Купити ковбасу", time: "13:59", readyTime: undefined },
  ];
  toDoData: DataTask[] = [
    {
      text: "Ранкова пробіжка",
      time: "06:00",
      readyTime: undefined,
    },
    {
      text: "Сніданок",
      time: "7:30",
      readyTime: undefined,
    },
    {
      text: "Почати працювати",
      time: "8:00",
      readyTime: undefined,
    },
    {
      text: "закінчити працювати",
      time: "16:00",
      readyTime: undefined,
    },
  ];
  toCallData: DataTask[] = [
    {
      text: "Стоматолог",
      time: "09:30",
      readyTime: undefined,
    },
    {
      text: "Сантехнік",
      time: "14:30",
      readyTime: undefined,
    },
    {
      text: "Електрик",
      time: "14:25",
      readyTime: undefined,
    },
    {
      text: "Няня",
      time: "12:00",
      readyTime: undefined,
    },
  ];
  getDataBuy() {
    return this.toBuyData.slice();
  }
  getDataToDo() {
    return this.toDoData.slice();
  }
  getDataCall() {
    return this.toCallData.slice();
  }
  addNewTaskBuy(dataTask: DataTask) {
    this.toBuyData.push(dataTask);
    this.toDataChanges.next(this.toBuyData.slice());
  }
  addNewTaskToDo(dataTask: DataTask) {
    this.toDoData.push(dataTask);
    this.toDataChanges.next(this.toDoData.slice());
  }
  addNewTaskCall(dataTask: DataTask) {
    this.toCallData.push(dataTask);
    this.toDataChanges.next(this.toCallData.slice());
  }
  deleteTaskBuy(id: number) {
    this.toBuyData.splice(id, 1);
    this.toDataChanges.next(this.toBuyData.slice());
  }
  deleteTaskToDo(id: number) {
    this.toDoData.splice(id, 1);
    this.toDataChanges.next(this.toDoData.slice());
  }
  deleteTaskCall(id: number) {
    this.toCallData.splice(id, 1);
    this.toDataChanges.next(this.toCallData.slice());
  }
  editTaskBuy(text: string, time: string, id: number) {
    this.toBuyData[id].text = text;
    this.toBuyData[id].time = time;
    this.toDataChanges.next(this.toBuyData.slice());
  }
  editTaskToDo(text: string, time: string, id: number) {
    this.toDoData[id].text = text;
    this.toDoData[id].time = time;
    this.toDataChanges.next(this.toDoData.slice());
  }
  editTaskCall(text: string, time: string, id: number) {
    this.toCallData[id].text = text;
    this.toCallData[id].time = time;
    this.toDataChanges.next(this.toCallData.slice());
  }
}
