import {JobPosition} from "../../base/models/job-position";
import {Employee} from "./Employee";

export class PersonnelRequisition implements Deserializable {

  public id: number;
  public requestDate: Date;
  public requestSubmitionDate: Date;
  public requestingDepartment: number;
  public quantity: number;
  public reasonForRequest: string;
  public employmentType: string;
  public reccruitFrom: string;
  public requestStatus: number;
  public initiatedBy: Employee;
  public requestedByEmployee: Employee;
  public jobPosition: JobPosition;


  deserialize(single: any) {
    if (single == null) return null;

    this.initiatedBy = new Employee().deserialize(<any>single.initiatedBy);
    delete single.initiatedBy;

    this.requestedByEmployee = new Employee().deserialize(<any>single.requestedByEmployee);
    delete single.requestedByEmployee;

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
      arrayOfMe.push(new PersonnelRequisition().deserialize(one));
    }
    return arrayOfMe;
  }
}
