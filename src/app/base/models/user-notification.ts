import {User} from "./user";
import {Notification} from "./notification";
/**
 * Created by Heka on 1/11/2019.
 */
export class UserNotification implements Deserializable{

  public id: number;
  public user: User;
  public notification: Notification;


  deserialize(single: any){
    if (single == null) return null;
    this.user = new User().deserialize(<any>single.user);
    delete single.user;

    this.notification = new Notification().deserialize(<any>single.notification);
    delete single.notification;

    //noinspection TypeScriptUnresolvedFunction
    Object.assign(this, single);
    return this;
  }

  deserializeArray(multi: any){
    if(multi == null) return [];
    let arrayOfMe = [];
    for(let one of multi) {
      arrayOfMe.push(new UserNotification().deserialize(one));
    }
    return arrayOfMe;
  }

}
