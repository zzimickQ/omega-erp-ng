import {User} from "./user";
/**
 * Created by Heka on 1/11/2019.
 */

export class Notification implements Deserializable{

  public id: number ;
  public title: string ;
  public details: string ;
  public postdate: Date ;
  public sourceUser: User;

  deserialize(single: any){
    if (single == null) return null;
    this.sourceUser = new User().deserialize(<any>single.sourceUser);
    delete single.sourceUser;

    //noinspection TypeScriptUnresolvedFunction
    Object.assign(this, single);
    return this;
  }

  deserializeArray(multi: any){
    if(multi == null) return [];
    let arrayOfMe = [];
    for(let one of multi) {
      arrayOfMe.push(new Notification().deserialize(one));
    }
    return arrayOfMe;
  }

}
