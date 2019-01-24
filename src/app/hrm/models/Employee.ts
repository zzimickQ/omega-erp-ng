import {Address} from "./Address";
import {PhoneNumbers} from "./Phone-Numbers";


export class Employee implements Deserializable {

  public id: number;
  public firstName:string;
  public fatherName:string;
  public grandFatherName:string;
  public gender:string;
  public birthDate:Date;
  public email:string;
  public firstRegisteredDate:Date;
  public meritalStatus:string;
  public bankAccountNumber:string;
  public entitledLeaveDays:number;
  public nationality:string;
  public primaryPhoneNumbers:PhoneNumbers;
  public primaryAddress:Address;


  deserialize(single: any) {
    if (single == null) return null;

    this.primaryPhoneNumbers = new PhoneNumbers().deserialize(<any>single.primaryPhoneNumbers);
    delete single.primaryPhoneNumbers;

    this.primaryAddress = new Address().deserialize(<any>single.primaryAddress);
    delete single.primaryAddress;

    //noinspection TypeScriptUnresolvedFunction
    Object.assign(this, single);
    return this;
  }

  deserializeArray(multi: any) {
    if (multi == null) return [];
    let arrayOfMe = [];
    for (let one of multi) {
      arrayOfMe.push(new Employee().deserialize(one));
    }
    return arrayOfMe;
  }
}
