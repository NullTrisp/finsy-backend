import { Request, Response } from "express";
import { create as createDb, readAll, deletion as deletionDb, update as updateDb } from "./db";

const create = async (req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response) => {
    const id = await createDb(req.params.userId, req.body);

    return res.status(200).send(id);
};

const read = async (req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response) => {
    const stocks = await readAll(req.params.userId);

    return res.status(200).send(stocks);
};

const update = async (req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response) => {
    await updateDb(req.params.userId, req.params.recordId, req.body);

    return res.sendStatus(200);
};

const deletion = async (req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response) => {
    await deletionDb(req.params.userId, req.params.recordId);

    return res.sendStatus(200);
};

const controller = {
    create,
    read,
    update,
    deletion,
};

export default controller;

export { create, read, update, deletion };
