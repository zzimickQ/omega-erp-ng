import {Employee} from "./Employee";
import {Branch} from "./Branch";
import {JobPosition} from "../../base/models/job-position";
import {BenefitPackage} from "./Benefit-Package";

export class PDTRequests implements Deserializable {

  public id: number;
  public type: number;
  public requestDate: Date;
  public requestingDepartment: number;
  public reason: string;
  public toSalary: number;
  public state: boolean;
  public finalizedDate: Date;
  public remark: string;
  public requestedEmployee: Employee;
  public initiatedByEmployee: Employee;
  public employee: Employee;
  public toBranch: Branch;
  public toJobPosition: JobPosition;
  public toBenefitPackage: BenefitPackage[];


  deserialize(single: any) {
    if (single == null) return null;

    this.requestedEmployee = new Employee().deserialize(<any>single.requestedEmployee);
    delete single.requestedEmployee;

    this.initiatedByEmployee = new Employee().deserialize(<any>single.initiatedByEmployee);
    delete single.initiatedByEmployee;

    this.employee = new Employee().deserialize(<any>single.employee);
    delete single.employee;

    this.toBranch = new Branch().deserialize(<any>single.toBranch);
    delete single.toBranch;

    this.toJobPosition = new JobPosition().deserialize(<any>single.toJobPosition);
    delete single.toJobPosition;

    this.toBenefitPackage = new BenefitPackage().deserializeArray(<any>single.toBenefitPackage);
    delete single.toBenefitPackage;

    //noinspection TypeScriptUnresolvedFunction
    Object.assign(this, single);
    return this;
  }

  deserializeArray(multi: any) {
    if (multi == null) return [];
    let arrayOfMe = [];
    for (let one of multi) {
      arrayOfMe.push(new PDTRequests().deserialize(one));
    }
    return arrayOfMe;
  }
}
