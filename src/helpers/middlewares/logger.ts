import { NextFunction, Request, Response } from "express";

const logger = (req: Request<import("express-serve-static-core").ParamsDictionary>, _: Response, next: NextFunction): void => {
    console.log("method", req.method);
    console.log("url", req.url);
    console.log("body", req.body);
    console.log("params", req.params);
    console.log("query", req.query);

    return next();
};

export default logger;
