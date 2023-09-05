import { Router } from "express";
import { body, validationResult, oneOf } from "express-validator";
import { handleInputErrors } from "./modules/middleware";
import {
  createProduct,
  deleteProduct,
  getOneProduct,
  getProducts,
  updateProduct,
} from "./handlers/product";
import {
  createUpdate,
  deleteUpdate,
  getOneUpdate,
  getUpdates,
  updateUpdate,
} from "./handlers/update";

const router = Router(); // regular function not a class

/**
 * ? PRODUCTS
 */

router.get("/product", getProducts);
router.get("/product/:id", getOneProduct);
router.put(
  "/product/:id",
  body("name").isString(),
  handleInputErrors,
  updateProduct
);
router.post(
  "/product",
  body("name").isString(),
  handleInputErrors,
  createProduct
);
router.delete(
  "/product/:id",
  body("name").isString(),
  handleInputErrors,
  deleteProduct
);

/**
 * ? UPDATE
 */

router.get("/update", getUpdates);
router.get(
  "/update/:id",
  // body("title").optional(),
  // body("body").optional(),
  // body("status").isIn(["DEPRECATED", "IN_PROGRESS", "SHIPPED"]),
  // body("version").optional(),
  // handleInputErrors,
  getOneUpdate
);
router.post(
  "/update",
  body("title").exists().isString(),
  body("body").exists().isString(),
  body("productId").exists().isString(),
  // handleInputErrors,
  createUpdate
);
router.put("/update/:id", updateUpdate);
router.delete("/update/:id", deleteUpdate);

/**
 * ? UPDATE-POINT
 */

router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});
router.put(
  "/updatepoint/:id",
  body("name").optional().isString(),
  body("description").optional().isString(),
  () => {}
);
router.post(
  "/updatepoint",
  body("name").isString(),
  body("description").isString(),
  body("updateId").exists().isString(),
  () => {}
);
router.delete("/updatepoint/:id", () => {});

export default router;
