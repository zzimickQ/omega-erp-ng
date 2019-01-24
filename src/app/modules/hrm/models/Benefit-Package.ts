import {BenefitPackageLevel} from "./Benefit-Package-Level";
import {JobPosition} from "../../base/models/job-position";

export class BenefitPackage implements Deserializable {

  public id: number;
  public name: string;
  public benefitPackageLevel: BenefitPackageLevel;

  deserialize(single: any) {
    if (single == null) return null;

    this.benefitPackageLevel = new BenefitPackageLevel().deserialize(<any>single.benefitPackageLevel);
    delete single.benefitPackageLevel;

    //noinspection TypeScriptUnresolvedFunction
    Object.assign(this, single);
    return this;
  }

  deserializeArray(multi: any) {
    if (multi == null) return [];
    let arrayOfMe = [];
    for (let one of multi) {
      arrayOfMe.push(new BenefitPackage().deserialize(one));
    }
    return arrayOfMe;
  }
}
