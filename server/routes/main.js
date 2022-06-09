import express from "express";
import { addToCart } from "../controller/main.js";

const router = express.Router();

router.post("/", addToCart);

export default router;
