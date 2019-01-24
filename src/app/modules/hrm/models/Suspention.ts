import {Employee} from "./Employee";

export class Suspention implements Deserializable {

  public id: number;
  public salaryallowance:boolean;
  public causeforsuspention:number;
  public warnedofsuspension:boolean;
  public startdate:Date;
  public enddate:Date;
  public remark:string;
  public employee:Employee;
  public requestedByEmployee:Employee;



  deserialize(single: any) {
    if (single == null) return null;

    this.employee = new Employee().deserialize(<any>single.employee);
    delete single.employee;

    this.requestedByEmployee = new Employee().deserialize(<any>single.requestedByEmployee);
    delete single.requestedByEmployee;


    //noinspection TypeScriptUnresolvedFunction
    Object.assign(this, single);
    return this;
  }

  deserializeArray(multi: any) {
    if (multi == null) return [];
    let arrayOfMe = [];
    for (let one of multi) {
      arrayOfMe.push(new Suspention().deserialize(one));
    }
    return arrayOfMe;
  }
}
