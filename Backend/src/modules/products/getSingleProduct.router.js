import query from "./../../../databases/dbConnection.js";
import express from "express";
const router = express.Router();
router.get("/products/:id", (req, res) => {
  const { id } = req.params;

  query.execute(
    `SELECT * FROM Products WHERE product_id=${id}`,
    (error, data) => {
      if (error) {
        res.json(error);
      } else {
        res.json(data);
      }
    }
  );
});
export default router;
