import {JobCategory} from "./job-category";
import {User} from "./user";
/**
 * Created by Heka on 1/10/2019.
 */


export class JobPosition implements Deserializable {

  public id: number;
  public title: string;
  public description: string;
  public level: number;
  public users: User[];
  public supervises: JobPosition[];
  public supervisedBy: JobPosition;
  // public defaultPrivileges:
  public category: JobCategory;

  constructor() {}

  deserialize(single: any) {
    if(single == null) return null;
    this.supervisedBy = new JobPosition().deserialize(single.supervisedBy);
    delete single.supervisedBy;
    this.category = new JobCategory().deserialize(single.category);
    delete single.category;
    this.users = new User().deserializeArray(single.users);
    delete single.users;
    this.supervises = new JobPosition().deserializeArray(single.supervises);
    delete single.supervises;
    //noinspection TypeScriptUnresolvedFunction
    Object.assign(this, single);
    return this;
  }
  deserializeArray(multi: any) {
    if(multi == null) return [];
    let arrayOfMe = [];
    for(let one of multi) {
      arrayOfMe.push(new JobPosition().deserialize(one));
    }
    return arrayOfMe;
  }

}