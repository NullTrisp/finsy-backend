/* eslint-disable new-cap */
import express from "express";
import { create, read, deletion as deleteController, update } from "./controller";

const router = express.Router({
    strict: true,
});

router.get("/:userId/stock", read);
router.post("/:userId/stock", create);
router.put("/:userId/stock/:recordId", update);
router.delete("/:userId/stock/:recordId", deleteController);

export default router;
