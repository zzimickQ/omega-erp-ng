import {Employee} from "./Employee";

export class EmployeeDisciplinaryReport implements Deserializable {

  public id: number;
  public reportedDate:Date;
  public employeeNotifiedDate:Date;
  public employee:Employee[];
  public reporterEmployee:Employee[];

  deserialize(single: any) {
    if (single == null) return null;

    this.employee = new Employee().deserializeArray(<any>single.employee);
    delete single.employee;

    this.reporterEmployee = new Employee().deserializeArray(<any>single.reporterEmployee);
    delete single.reporterEmployee;

    //noinspection TypeScriptUnresolvedFunction
    Object.assign(this, single);
    return this;
  }

  deserializeArray(multi: any) {
    if (multi == null) return [];
    let arrayOfMe = [];
    for (let one of multi) {
      arrayOfMe.push(new EmployeeDisciplinaryReport().deserialize(one));
    }
    return arrayOfMe;
  }
}
