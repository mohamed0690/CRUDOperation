import query from "../../../databases/dbConnection.js";
import express from "express";
const router = express.Router();

router.post("/products", (req, res) => {
  const { name, desc, price } = req.body;

  query.execute(
    `INSERT INTO Products (product_name,product_description,product_price) VALUES('${name}','${desc}',${price})`,
    (error, data) => {
      if (error) res.json(error);
      else {
        res.json({ message: "success" });
      }
    }
  );
});

export default router;
