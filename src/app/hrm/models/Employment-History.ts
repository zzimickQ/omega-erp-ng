import {JobPosition} from "../../base/models/job-position";
import {Employee} from "./Employee";
import {BenefitPackage} from "./Benefit-Package";

export class EmploymentHistory implements Deserializable {

  public id: number;
  public startDate:Date;
  public endDate:Date;
  public salary:number;
  public empType:string;
  public causeOfEnd:string;
  public remark:string;
  public employeeId:Employee;
  public jobPositionId:JobPosition;
  public benefitPackageId:BenefitPackage;
  public responsibleForEndEmployeeId:Employee;


  deserialize(single: any) {
    if (single == null) return null;

    this.employeeId = new Employee().deserialize(<any>single.employeeId);
    delete single.employeeId;

    this.jobPositionId = new JobPosition().deserialize(<any>single.jobPositionId);
    delete single.jobPositionId;

    this.benefitPackageId = new BenefitPackage().deserialize(<any>single.benefitPackageId);
    delete single.benefitPackageId;

    this.responsibleForEndEmployeeId = new Employee().deserialize(<any>single.responsibleForEndEmployeeId);
    delete single.responsibleForEndEmployeeId;

    //noinspection TypeScriptUnresolvedFunction
    Object.assign(this, single);
    return this;
  }

  deserializeArray(multi: any) {
    if (multi == null) return [];
    let arrayOfMe = [];
    for (let one of multi) {
      arrayOfMe.push(new EmploymentHistory().deserialize(one));
    }
    return arrayOfMe;
  }
}
