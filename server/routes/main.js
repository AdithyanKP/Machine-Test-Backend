import express from "express";
import { getCartElements } from "../controller/main.js";

const router = express.Router();

router.get("/", getCartElements);

export default router;
