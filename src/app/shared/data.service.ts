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
      text: "Написати шедевр світової літератури",
      time: "14:00",
      readyTime: undefined,
    },
    {
      text: "Вбити таракана тупою кіркою",
      time: "14:30",
      readyTime: undefined,
    },
    {
      text: "Погавкати на схід сонця через ліве коліно правої ноги",
      time: "13:59",
      readyTime: undefined,
    },
    {
      text:
        "Потріпати вказівним пальцем правої руки по губам і одночасно видавати не характерні звуки альбіноса при спарюванні з самкою дикої мурахоїдки",
      time: "22:00",
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
}
