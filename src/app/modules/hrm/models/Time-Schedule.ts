import {MonthlySchedule} from "./Monthly-Schedule";

export class TimeSchedule implements Deserializable {

  public id: number;
  public scheduledFor: number;
  public startTime: Date;
  public endTime: Date;
  public monthId: MonthlySchedule;


  deserialize(single: any) {
    if (single == null) return null;

    this.monthId = new MonthlySchedule().deserialize(<any>single.monthId);
    delete single.monthId;

    //noinspection TypeScriptUnresolvedFunction
    Object.assign(this, single);
    return this;
  }

  deserializeArray(multi: any) {
    if (multi == null) return [];
    let arrayOfMe = [];
    for (let one of multi) {
      arrayOfMe.push(new TimeSchedule().deserialize(one));
    }
    return arrayOfMe;
  }
}
