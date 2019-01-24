import {Applicants} from "./Applicants";
import {Employee} from "./Employee";
import {Vacancy} from "./Vacancy";
import {EmploymentInfo} from "./Employment-Info";
import {PersonnelRequisition} from "./Personnel-Requisition";

export class EmploymentSequence implements Deserializable {

  public id: number;
  public applicantSource: boolean;
  public personnelRequisition: PersonnelRequisition;
  public vacancy: Vacancy;
  public applicants: Applicants;
  public employee: Employee;
  public employmentInfo: EmploymentInfo;


  deserialize(single: any) {
    if (single == null) return null;

    this.personnelRequisition = new PersonnelRequisition().deserialize(<any>single.personnelRequisition);
    delete single.personnelRequisition;

    this.vacancy = new Vacancy().deserialize(<any>single.vacancy);
    delete single.vacancy;

    this.applicants = new Applicants().deserialize(<any>single.applicants);
    delete single.applicants;

    this.employee = new Employee().deserialize(<any>single.employee);
    delete single.employee;

    this.employmentInfo = new EmploymentInfo().deserialize(<any>single.employmentInfo);
    delete single.employmentInfo;

    //noinspection TypeScriptUnresolvedFunction
    Object.assign(this, single);
    return this;
  }

  deserializeArray(multi: any) {
    if (multi == null) return [];
    let arrayOfMe = [];
    for (let one of multi) {
      arrayOfMe.push(new EmploymentSequence().deserialize(one));
    }
    return arrayOfMe;
  }
}
