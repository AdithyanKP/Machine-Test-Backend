import express from "express";
import { changeQuandity } from "../controller/main.js";

const router = express.Router();

router.post("/", changeQuandity);

export default router;
