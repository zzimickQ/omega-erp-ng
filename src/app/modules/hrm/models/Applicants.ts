import {Address} from "./Address";
import {Vacancy} from "./Vacancy";

/**
 * Created by Heka on 1/11/2019.
 */
export class Applicants implements Deserializable {

  public id: number;
  public apply_date: Date;
  public first_name: string;
  public last_name: string;
  public g_father_name: string;
  public sex: string;
  public birth_date: Date;
  public email: string;
  public interview_result: number;
  public interview_remark: string;
  public test_result: number;
  public passed: number;
  public black_listed: boolean;
  public vacancy: Vacancy;
  // public primaryPhoneNumber:;
  public primaryAddress: Address;


  deserialize(single: any) {
    if (single == null) return null;

    this.vacancy = new Vacancy().deserialize(single.vacancy);
    delete single.vacancy;

    //this.primaryPhoneNumber = new PhoneNumbers().deserialize(single.primaryPhoneNumber);
    //delete single.primaryPhoneNumber;

    this.primaryAddress = new Address().deserialize(single.primaryAddress);
    delete single.primaryAddress;
    //noinspection TypeScriptUnresolvedFunction
    Object.assign(this, single);
    return this;
  }

  deserializeArray(multi: any) {
    if (multi == null) return [];
    let arrayOfMe = [];
    for (let one of multi) {
      arrayOfMe.push(new Applicants().deserialize(one));
    }
    return arrayOfMe;
  }
}
