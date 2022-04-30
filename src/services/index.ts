import Express from "express";

export function run(req: Express.Request, res: Express.Response) { 
    console.log("test routes...");

    res.send("working");
}