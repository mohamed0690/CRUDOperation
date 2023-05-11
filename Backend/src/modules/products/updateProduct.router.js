import query from "../../../databases/dbConnection.js";
import express from "express";
const router = express.Router();

router.put("/products/", (req, res) => {
  const { id, name, desc, price } = req.body;

  query.execute(
    `UPDATE Products SET product_name = '${name}',product_description = '${desc}',product_price = ${price} WHERE product_id=${id}`,
    (error, data) => {
      if (error) {
        res.json(error);
      } else {
        res.json({ message: "Success!" });
      }
    }
  );
});
export default router;
