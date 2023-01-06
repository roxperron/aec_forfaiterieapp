import { Lodging } from "./lodging";
import { Reviews } from "./review";
import { Search } from "./search";


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
  search:Search[];
}
