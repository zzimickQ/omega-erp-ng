import {User} from "./user";
/**
 * Created by Heka on 1/10/2019.
 */


export class Privilege implements Deserializable {

    public id: number;
    public name: String;
    public discription: String;
    public users: User[];


  deserialize(single: any) {
    this.users = new User().deserializeArray(<any>single.users);
    delete single.users;
    //noinspection TypeScriptUnresolvedFunction
    Object.assign(this, single);
    return this;
  }


  deserializeArray(multi: any) {
    if(multi == null) return [];
    let arrayOfMe = [];
    for(let one of multi) {
      arrayOfMe.push(new Privilege().deserialize(one));
    }
    return arrayOfMe;

  }

}
