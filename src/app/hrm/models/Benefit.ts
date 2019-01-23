export class Benefit implements Deserializable {

  public id: number;
  public name: string;


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
      arrayOfMe.push(new Benefit().deserialize(one));
    }
    return arrayOfMe;
  }
}
