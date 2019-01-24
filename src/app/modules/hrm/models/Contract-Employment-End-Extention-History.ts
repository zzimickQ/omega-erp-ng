import {BenefitPackage} from "./Benefit-Package";
import {ContractEmploymentInfo} from "./Contract-Employment-Info";

export class ContractEmploymentEndExtentionHistory implements Deserializable {

  public id: number;
  public fromEndDate: Date;
  public toEndDate: Date;
  public fromSalary: number;
  public toSalary: number;
  public remark: string;
  public contractEmploymentInfo: ContractEmploymentInfo;
  public toBenefitPackages: BenefitPackage;
  public fromBenefitPackages: BenefitPackage;


  deserialize(single: any) {
    if (single == null) return null;

    this.contractEmploymentInfo = new ContractEmploymentInfo().deserialize(<any>single.contractEmploymentInfo);
    delete single.contractEmploymentInfo;


    this.toBenefitPackages = new BenefitPackage().deserialize(<any>single.toBenefitPackages);
    delete single.toBenefitPackages;

    this.fromBenefitPackages = new BenefitPackage().deserialize(<any>single.fromBenefitPackages);
    delete single.fromBenefitPackages;


    //noinspection TypeScriptUnresolvedFunction
    Object.assign(this, single);
    return this;
  }

  deserializeArray(multi: any) {
    if (multi == null) return [];
    let arrayOfMe = [];
    for (let one of multi) {
      arrayOfMe.push(new ContractEmploymentEndExtentionHistory().deserialize(one));
    }
    return arrayOfMe;
  }
}
