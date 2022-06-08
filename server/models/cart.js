import mongoose from "mongoose";

const cartSchema = mongoose({
  id: Number,
  name: String,
  quantity: Number,
});
const CartMessage = mongoose.model("CartMessage", cartSchema);
export default CartMessage;
