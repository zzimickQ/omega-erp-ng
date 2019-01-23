import {Address} from "./Address";
import {JobPosition} from "../../base/models/job-position";

export class Branch implements Deserializable {

  public id: number;
  public name: string;
  public discription:string;
  public address:Address;

  deserialize(single: any) {
    if (single == null) return null;

    this.address = new Address().deserialize(<any>single.address);
    delete single.address;

    //noinspection TypeScriptUnresolvedFunction
    Object.assign(this, single);
    return this;
  }

  deserializeArray(multi: any) {
    if (multi == null) return [];
    let arrayOfMe = [];
    for (let one of multi) {
      arrayOfMe.push(new Branch().deserialize(one));
    }
    return arrayOfMe;
  }
}
