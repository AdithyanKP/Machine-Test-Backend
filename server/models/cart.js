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
const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
