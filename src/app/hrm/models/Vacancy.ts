/**
 * Created by Heka on 1/11/2019.
 */
export class Vacancy implements Deserializable {

  public id:number;
  public recruitFrom:string;
  public postDate:Date;
  public updateDate:Date;
  public appProcessDiscription:string;
  public requestedQuantity:number;
  public deadLine:Date;
  public reanounce:number;
  public remrk:string;
  public requisition: PersonnelRequisition;

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
