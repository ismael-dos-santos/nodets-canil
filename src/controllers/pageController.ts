import { type Request, type Response } from "express";

 export const home = (req: Request, res: Response) => { 
   res.send("Home no controller 2");
   //res.render("pages/index");
 };
 
 export const dogs = (req: Request, res: Response) => {
   res.send("Pagina de cachorros");
   //res.render("pages/dogs");
 };
 
 export const cats = (req: Request, res: Response) => {
   //res.render("pages/cats");
 };
 
 export const fishes = (req: Request, res: Response) => {
   //res.render("pages/fishes");
 }