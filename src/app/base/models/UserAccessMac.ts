import {User} from "./user";
/**
 * Created by Heka on 1/11/2019.
 */

export class UserAccessMac implements Deserializable {

  public id: number;
  public active: boolean;
  public macAddress: string;
  public user: User;


  deserialize(single: any) {
    if (single == null) return null;
    this.user = new User().deserialize(single.user);
    delete single.user;
    //noinspection TypeScriptUnresolvedFunction
    Object.assign(this, single);
    return this;

  }


  deserializeArray(multi: any) {
    if(multi == null) return [];
    let arrayOfMe = [];
    for(let one of multi) {
      arrayOfMe.push(new UserAccessMac().deserialize(one));
    }
    return arrayOfMe;

  }
}
