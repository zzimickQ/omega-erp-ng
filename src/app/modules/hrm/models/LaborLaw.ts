export class LaborLaw implements Deserializable {

  public id: number;
  public title: string;
  public description: string;
  public value: string;
  public lastUpdateTime: Date;


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
      arrayOfMe.push(new LaborLaw().deserialize(one));
    }
    return arrayOfMe;
  }
}
