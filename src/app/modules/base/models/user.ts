import {JobPosition} from "./job-position";
import {Privilege} from "./privilege";
import {UserAccessMac} from "./user-access-mac";

/**
 * Created by Heka on 1/10/2019.
 */


export class User implements Deserializable {

  public id: number;

  public username: string;
  public password: string;
  public email: string;
  public firstName: string;
  public lastName: string;
  public phoneNumberMobile: string;
  public phoneNumberLocal: string;
  public regDate: Date;
  public accountStatus: boolean;
  public profileUrl: string;
  public forceResetPassword: boolean;
  public employeeId: string;
  public jobPosition: JobPosition;
  public privileges: Privilege[];
  public userAccessMacs: UserAccessMac[];


  deserialize(single: any) {

    if (single == null) return null;
    this.jobPosition = new JobPosition().deserialize(<any>single.jobPosition);
    delete single.jobPosition;

    this.privileges = new Privilege().deserializeArray(<any>single.privileges);
    delete single.privileges;

    this.userAccessMacs = new UserAccessMac().deserializeArray(<any>single.userAccessMacs);
    delete single.userAccessMacs;

    //noinspection TypeScriptUnresolvedFunction
    Object.assign(this, single);
    return this;
  }


  deserializeArray(multi: any) {
    if (multi == null) return [];
    let arrayOfMe = [];
    for (let one of multi) {
      arrayOfMe.push(new User().deserialize(one));
    }
    return arrayOfMe;

  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

}
