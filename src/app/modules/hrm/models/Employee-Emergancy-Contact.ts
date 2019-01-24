import {Employee} from "./Employee";

export class EmployeeEmergancyContact implements Deserializable {

  public id: number;
  public firstName: string;
  public fatherName:string;
  public grandFatherName:string;
  public relationToEmployee:string;
  public nationality:string;
  public employee:Employee;


  deserialize(single: any) {
    if (single == null) return null;

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
      arrayOfMe.push(new EmployeeEmergancyContact().deserialize(one));
    }
    return arrayOfMe;
  }
}
