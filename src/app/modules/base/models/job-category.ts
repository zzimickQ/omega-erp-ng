import {JobPosition} from "./job-position";

/**
 * Created by Heka on 1/10/2019.
 */

export class JobCategory implements Deserializable {

  public id: number;
  public name: string;
  public description: string;

  public jobPositions: JobPosition[];

  constructor(name?: string, description?: string) {
    this.name = name;
    this.description = description;
  }

  deserialize(single: any): any {
    if (single == null) return null;
    this.jobPositions = new JobPosition().deserializeArray(<any>single.jobPositions);
    delete single.jobPositions;
    //noinspection TypeScriptUnresolvedFunction
    Object.assign(this, single);
    return this;
  }

  deserializeArray(multi) {
    if (multi == null) return [];
    let arrayOfMe = [];
    for (let one of multi) {
      arrayOfMe.push(new JobCategory().deserialize(one));
    }
    return arrayOfMe;
  }
}
