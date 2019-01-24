export class JobPositionQualification implements Deserializable {

  public id: number;
  public ageFrom: number;
  public ageTo: number;
  public gender: number;
  public experinceYears: number;
  public others: string;
  public qualificationDescription: string;


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
      arrayOfMe.push(new JobPositionQualification().deserialize(one));
    }
    return arrayOfMe;
  }
}
