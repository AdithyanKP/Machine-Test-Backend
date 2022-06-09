import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
  user: Number,
  cartItems: [
    {
      product: String,
      quandity: Number,
      price: Number,
      total: Number,
    },
  ],
});
const CartMessage = mongoose.model("CartMessage", cartSchema);
export default CartMessage;
