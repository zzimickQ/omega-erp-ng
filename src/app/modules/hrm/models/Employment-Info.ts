import {Employee} from "./Employee";
import {JobPosition} from "../../base/models/job-position";
import {Branch} from "./Branch";
import {BenefitPackage} from "./Benefit-Package";
import {Schedule} from "./Schedule";

export class EmploymentInfo implements Deserializable {

  public id: number;
  public salary: number;
  public startDate: Date;
  public empType: number;
  public employeeId: Employee;
  public jobPositionId: JobPosition;
  public branchId: Branch;
  public benefitPackageId: BenefitPackage;
  public scheduleId: Schedule[];


  deserialize(single: any) {
    if (single == null) return null;

    this.employeeId = new Employee().deserialize(<any>single.employeeId);
    delete single.employeeId;

    this.jobPositionId = new JobPosition().deserialize(<any>single.jobPositionId);
    delete single.jobPositionId;

    this.branchId = new Branch().deserialize(<any>single.branchId);
    delete single.branchId;

    this.benefitPackageId = new BenefitPackage().deserialize(<any>single.benefitPackageId);
    delete single.benefitPackageId;

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
      arrayOfMe.push(new EmploymentInfo().deserialize(one));
    }
    return arrayOfMe;
  }
}
