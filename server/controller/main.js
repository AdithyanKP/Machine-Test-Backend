import cart from "../models/cart.js";

//add to cart
export const addToCart = async (req, res) => {
  const { id, product, quandity, price } = req.body;

  try {
    //if the purchased product is notebook
    if (product === "Notebook") {
      let discount = 0;
      if (quandity > 3) return res.status(404).send("min quandity is 3");
      let beforeDiscount = price * quandity;
      if (beforeDiscount >= 500) {
        discount = beforeDiscount / 10;
        if (discount > 60) {
          discount = 60;
        }
      }
      let total = beforeDiscount - discount;
      const result = await cart.create({
        user: id,
        cartItems: [
          {
            product,
            quandity,
            price,
            total,
          },
        ],
      });

      //Total calculation
      let Total = await cart.aggregate([
        {
          $group: {
            _id: null,
            Total: { $sum: "total" },
          },
        },
      ]);
      if (Total < 10000) {
        Total = Total - 123;
      }
      res.json(result, Total);
    }

    //if the purchased product is sanitiezer
    if (product === "Sanitiezer") {
      let discount = 0;
      if (quandity > 10)
        return res.status(404).send("min quandity should be 10");
      let beforeDiscount = price * quandity;
      if (beforeDiscount > 3000) {
        discount = 100;
      }
      let total = beforeDiscount - discount;
      const result = await cart.create({
        user: id,
        cartItems: [
          {
            product,
            quandity,
            price,
            total,
          },
        ],
      });
      res.json(result);
    }

    //if the purchased product is Bag
    if (product === "Bag") {
      let discount = 0;
      if (quandity < 2) return res.status(404).send("max quandity is 2 ");
      let beforeDiscount = price * quandity;
      let total = beforeDiscount - discount;
      const result = await cart.create({
        user: id,
        cartItems: [
          {
            product,
            quandity,
            price,
            total,
          },
        ],
      });
      res.json(result);
    }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
