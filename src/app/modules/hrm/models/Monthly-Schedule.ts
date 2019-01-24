import {Schedule} from "./Schedule";

export class MonthlySchedule implements Deserializable {

  public id: number;
  public dayOfMonth: number;
  public scheduleId: Schedule[];


  deserialize(single: any) {
    if (single == null) return null;

    this.scheduleId = new Schedule().deserializeArray(<any>single.scheduleId);
    delete single.scheduleId;

    //noinspection TypeScriptUnresolvedFunction
    Object.assign(this, single);
    return this;
  }

  deserializeArray(multi: any) {
    if (multi == null) return [];
    let arrayOfMe = [];
    for (let one of multi) {
      arrayOfMe.push(new MonthlySchedule().deserialize(one));
    }
    return arrayOfMe;
  }
}
