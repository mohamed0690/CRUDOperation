import query from "./../../../databases/dbConnection.js";

import express from "express";
const router = express.Router();
router.get("/products", (req, res) => {
  query.execute(`SELECT * FROM Products`, (error, data) => {
    if (error) {
      res.json(error);
    } else {
      res.json(data);
    }
  });
});

export default router;
