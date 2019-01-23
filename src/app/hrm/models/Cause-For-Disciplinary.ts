import {JobPosition} from "../../base/models/job-position";

export class CauseForDisciplinary implements Deserializable {

  public id: number;
  public causeType:number;
  public startDate:Date;
  public endDate:Date;
  public remark: string;
  public employeeDesciplinaryReports:EmployeeDisciplinaryReport[];


  deserialize(single: any) {
    if (single == null) return null;

    this.employeeDesciplinaryReports = new EmployeeDisciplinaryReport().deserializeArray(<any>single.employeeDesciplinaryReports);
    delete single.employeeDesciplinaryReports;

    //noinspection TypeScriptUnresolvedFunction
    Object.assign(this, single);
    return this;
  }

  deserializeArray(multi: any) {
    if (multi == null) return [];
    let arrayOfMe = [];
    for (let one of multi) {
      arrayOfMe.push(new CauseForDisciplinary().deserialize(one));
    }
    return arrayOfMe;
  }
}
