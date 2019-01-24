import {Employee} from "./Employee";

export class PerformanceEvaluation implements Deserializable {

  public id: number;
  public remark: string;
  public grade: number;
  public evaluationDate: Date;
  public evaluatingEmployee: Employee;
  public employee: Employee;


  deserialize(single: any) {
    if (single == null) return null;

    this.evaluatingEmployee = new Employee().deserialize(<any>single.evaluatingEmployee);
    delete single.evaluatingEmployee;

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
      arrayOfMe.push(new PerformanceEvaluation().deserialize(one));
    }
    return arrayOfMe;
  }
}
