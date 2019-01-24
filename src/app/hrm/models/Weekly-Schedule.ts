import {Schedule} from "./Schedule";
import {JobPosition} from "../../base/models/job-position";

export class WeeklySchedule implements Deserializable {

  public id: number;
  public dayOfTheWeek: number;
  public schedule: Schedule;


  deserialize(single: any) {
    if (single == null) return null;

    this.schedule = new Schedule().deserialize(<any>single.schedule);
    delete single.schedule;

    //noinspection TypeScriptUnresolvedFunction
    Object.assign(this, single);
    return this;
  }

  deserializeArray(multi: any) {
    if (multi == null) return [];
    let arrayOfMe = [];
    for (let one of multi) {
      arrayOfMe.push(new WeeklySchedule().deserialize(one));
    }
    return arrayOfMe;
  }
}
