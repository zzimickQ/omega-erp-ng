import {Employee} from "./Employee";

export class TerminationRequest implements Deserializable {

  public id: number;
  public cause: string;
  public requestDate: Date;
  public effectiveDate: Date;
  public state: string;
  public employee: Employee[];


  deserialize(single: any) {
    if (single == null) return null;

    this.employee = new Employee().deserializeArray(<any>single.employee);
    delete single.employee;

    //noinspection TypeScriptUnresolvedFunction
    Object.assign(this, single);
    return this;
  }

  deserializeArray(multi: any) {
    if (multi == null) return [];
    let arrayOfMe = [];
    for (let one of multi) {
      arrayOfMe.push(new TerminationRequest().deserialize(one));
    }
    return arrayOfMe;
  }
}
