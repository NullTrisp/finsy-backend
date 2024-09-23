/* eslint-disable new-cap */
import express from "express";
import { create, read, deletion as deleteController, update } from "./controller";

const router = express.Router({
    strict: true,
});

router.get("/:userId/account", read);
router.post("/:userId/account/:accountId", create);
router.put("/:userId/account/:recordId", update);
router.delete("/:userId/account/:recordId", deleteController);

export default router;
