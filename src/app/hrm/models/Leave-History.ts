import {Employee} from "./Employee";
import {JobPosition} from "../../base/models/job-position";

export class LeaveHistory implements Deserializable {

  public id: number;
  public leaveType:number;
  public state:boolean;
  public startDate:Date;
  public endDate:Date;
  public remark:string;
  public requstedByEmployee:Employee;
  public employee:Employee;


  deserialize(single: any) {
    if (single == null) return null;

    this.requstedByEmployee = new Employee().deserialize(<any>single.requstedByEmployee);
    delete single.requstedByEmployee;

    this.employee = new Employee().deserialize(<any>single.employee);
    delete single.employee;

    //noinspection TypeScriptUnresolvedFunction
    Object.assign(this, single);
    return this;
  }

  deserializeArray(multi: any) {
    if (multi == null) return [];
    let arrayOfMe = [];
    for (let one of multi) {
      arrayOfMe.push(new LeaveHistory().deserialize(one));
    }
    return arrayOfMe;
  }
}
