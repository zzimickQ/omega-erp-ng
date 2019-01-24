import {Vacancy} from "./Vacancy";
import {Employee} from "./Employee";

export class InternalApplicants implements Deserializable {

  public id: number;
  public applyDate:Date;
  public interviewResult:number;
  public interviewRemark:string;
  public testResult:number;
  public state:boolean;
  public employee:Employee;
  public vacancy:Vacancy;



  deserialize(single: any) {
    if (single == null) return null;

    this.employee = new Employee().deserialize(<any>single.employee);
    delete single.employee;

    this.vacancy = new Vacancy().deserialize(<any>single.vacancy);
    delete single.vacancy;


    //noinspection TypeScriptUnresolvedFunction
    Object.assign(this, single);
    return this;
  }

  deserializeArray(multi: any) {
    if (multi == null) return [];
    let arrayOfMe = [];
    for (let one of multi) {
      arrayOfMe.push(new InternalApplicants().deserialize(one));
    }
    return arrayOfMe;
  }
}
