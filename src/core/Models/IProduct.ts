import { IRate } from "./IRate";

export interface IPorduct
{
 id:number;
 title:string;
 price:string;
 description:string;
 category:string;
 image:string;
 rating:IRate;
}