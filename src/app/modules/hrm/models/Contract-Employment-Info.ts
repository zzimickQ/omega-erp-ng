import {JobPosition} from "../../base/models/job-position";
import {Branch} from "./Branch";
import {BenefitPackage} from "./Benefit-Package";
import {Employee} from "./Employee";


export class ContractEmploymentInfo implements Deserializable {

  public id: number;
  public salary: number;
  public startDate: Date;
  public endDate: Date;
  public employeeId: Employee;
  public jobPositionId: JobPosition;
  public branchId: Branch;
  public benefitPackageId: BenefitPackage[];


  deserialize(single: any) {
    if (single == null) return null;

    this.employeeId = new Employee().deserialize(<any>single.employeeId);
    delete single.employeeId;

    this.jobPositionId = new JobPosition().deserialize(<any>single.jobPositionId);
    delete single.jobPositionId;

    this.branchId = new Branch().deserialize(<any>single.branchId);
    delete single.branchId;

    this.benefitPackageId = new BenefitPackage().deserializeArray(<any>single.benefitPackageId);
    delete single.benefitPackageId;


    //noinspection TypeScriptUnresolvedFunction
    Object.assign(this, single);
    return this;
  }

  deserializeArray(multi: any) {
    if (multi == null) return [];
    let arrayOfMe = [];
    for (let one of multi) {
      arrayOfMe.push(new ContractEmploymentInfo().deserialize(one));
    }
    return arrayOfMe;
  }
}
