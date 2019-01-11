/**
 * Created by Heka on 1/11/2019.
 */
export class Vacancy implements Deserializable {

  public id:number;
  public recruitFrom:string;
  public :;
  public :;
  public :;
  public :;
  public :;

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
      arrayOfMe.push(new Vacancy().deserialize(one));
    }
    return arrayOfMe;
  }
}
