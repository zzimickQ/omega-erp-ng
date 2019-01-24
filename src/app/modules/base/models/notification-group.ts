import {User} from "./user";
/**
 * Created by Heka on 1/11/2019.
 */
export class NotificationGroup implements Deserializable{

  public id: number;
  public name: string;
  public users: User[];

  deserialize(single: any){
    if (single == null) return null;
    this.users = new User().deserializeArray(<any>single.users);
    delete single.users;
    //noinspection TypeScriptUnresolvedFunction
    Object.assign(this, single);
    return this;
  }

  deserializeArray(multi: any){
    if(multi == null) return [];
    let arrayOfMe = [];
    for(let one of multi) {
      arrayOfMe.push(new NotificationGroup().deserialize(one));
    }
    return arrayOfMe;
  }

}
