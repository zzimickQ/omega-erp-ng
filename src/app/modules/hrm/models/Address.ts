/**
 * Created by Heka on 1/11/2019.
 */

export class Address implements Deserializable {

  public id: number;
  public refersTo: number;
  public country: string;
  public city: string;
  public zone: string;
  public subCity: string;
  public wereda: string;
  public kebele: string;
  public houseNumber: string;
  public streetName: string;
  public blockNumber: string;

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
      arrayOfMe.push(new Address().deserialize(one));
    }
    return arrayOfMe;
  }
}
