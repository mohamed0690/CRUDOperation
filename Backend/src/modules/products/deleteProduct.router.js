import query from "../../../databases/dbConnection.js";
import express from "express";
const router = express.Router();
router.delete("/products/", (req, res) => {
  const { id } = req.body;
  query.execute(
    `DELETE FROM Products WHERE product_id=${id}`,
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
