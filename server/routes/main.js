import express from "express";
import { addToCart } from "../controller/main.js";

const router = express.Router();

router.post("/addtoCart", addToCart);

export default router;
