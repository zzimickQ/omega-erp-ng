/**
 * Created by Heka on 1/10/2019.
 */


interface Deserializable {
  deserialize(single: any);
  deserializeArray(multi: any);
}
