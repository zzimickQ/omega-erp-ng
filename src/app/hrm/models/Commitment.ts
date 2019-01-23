import {Employee} from "./Employee";

export class Commitment implements Deserializable {

  public id: number;
  public type:number;
  public discription:string;
  public deptAmount:number;
  public deptpayed:number;
  public startDate:Date;
  public endDate:Date;
  public paymentInterval:number;
  public state:boolean;
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
      arrayOfMe.push(new Commitment().deserialize(one));
    }
    return arrayOfMe;
  }
}
