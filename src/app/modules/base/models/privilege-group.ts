import {Privilege} from "./privilege";

/**
 * Created by Heka on 1/11/2019.
 */
export class PrivilegeGroup implements Deserializable {

  public id: number;
  public name: string;
  public description: string;
  public privileges: Privilege[];

  deserialize(single: any) {
    if (single == null) return null;
    this.privileges = new Privilege().deserializeArray(<any>single.privileges);
    delete single.privileges;

    //noinspection TypeScriptUnresolvedFunction
    Object.assign(this, single);
    return this;
  }

  deserializeArray(multi: any) {
    if (multi == null) return [];
    let arrayOfMe = [];
    for (let one of multi) {
      arrayOfMe.push(new PrivilegeGroup().deserialize(one));
    }
    return arrayOfMe;
  }

}
