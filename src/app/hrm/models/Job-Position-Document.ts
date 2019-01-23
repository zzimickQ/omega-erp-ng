import {JobPosition} from "../../base/models/job-position";

export class JobPositionDocument implements Deserializable {

  public id: number;
  public docType:string;
  public mandatory:boolean;
  public deadlineDays:number;
  public remindInDays:number;
  public jobPosition:JobPosition;


  deserialize(single: any) {
    if (single == null) return null;

    this.jobPosition = new JobPosition().deserialize(<any>single.jobPosition);
    delete single.jobPosition;

    //noinspection TypeScriptUnresolvedFunction
    Object.assign(this, single);
    return this;
  }

  deserializeArray(multi: any) {
    if (multi == null) return [];
    let arrayOfMe = [];
    for (let one of multi) {
      arrayOfMe.push(new JobPositionDocument().deserialize(one));
    }
    return arrayOfMe;
  }
}
