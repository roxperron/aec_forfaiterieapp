import { Lodging } from "./lodging";
import { Reviews } from "./review";



export interface Package {
  id?: number;
  code: string;
  name: string;
  description: string;
  startdate: string;
  enddate:string;
  price: number;
  newprice?: number;
  rank: string;
  prenium?: boolean;
  lodging: Lodging;
  categories: string[];
  reviews:Reviews[];
}
