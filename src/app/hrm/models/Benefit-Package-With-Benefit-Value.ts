import {Benefit} from "./Benefit";
import {BenefitPackage} from "./Benefit-Package";
import {JobPosition} from "../../base/models/job-position";

export class BenefitPackageWithBenefitValue implements Deserializable {

  public id: number;
  public remark: string;
  public amount: number;
  public benefits: Benefit[];
  public benefitPackages: BenefitPackage[];


  deserialize(single: any) {
    if (single == null) return null;

    this.benefits = new JobPosition().deserializeArray(<any>single.benefits);
    delete single.benefits;

    this.benefitPackages = new JobPosition().deserializeArray(<any>single.benefitPackages);
    delete single.benefitPackages;

    //noinspection TypeScriptUnresolvedFunction
    Object.assign(this, single);
    return this;
  }

  deserializeArray(multi: any) {
    if (multi == null) return [];
    let arrayOfMe = [];
    for (let one of multi) {
      arrayOfMe.push(new BenefitPackageWithBenefitValue().deserialize(one));
    }
    return arrayOfMe;
  }
}
