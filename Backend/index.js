import express, { json } from "express";
import query from "./databases/dbConnection.js";
import cors from "cors";
import getAllProducts from "./src/modules/products/product.router.js";
import getSingleProduct from "./src/modules/products/getSingleProduct.router.js";
import addProduct from "./src/modules/products/addProduct.router.js";
import updateProduct from "./src/modules/products/updateProduct.router.js";
import deleteProduct from "./src/modules/products/deleteProduct.router.js";
import homeRouter from "./src/modules/home/welcomeProduct.router.js";

const app = express();
app.use(express.json());

app.use(cors());
app.use(homeRouter);
app.use(getAllProducts);
app.use(getSingleProduct);
app.use(addProduct);
app.use(updateProduct);
app.use(deleteProduct);
const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
