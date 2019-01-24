export class PhoneNumbers implements Deserializable {

  public id: number;
  public refersTo: number;
  public phoneNumber: string;
  public type: string;


  deserialize(single: any) {
    if (single == null) return null;


    //noinspection TypeScriptUnresolvedFunction
    Object.assign(this, single);
    return this;
  }

  deserializeArray(multi: any) {
    if (multi == null) return [];
    let arrayOfMe = [];
    for (let one of multi) {
      arrayOfMe.push(new PhoneNumbers().deserialize(one));
    }
    return arrayOfMe;
  }
}
