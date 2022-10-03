const express = require("express");
const {
  createCustomer,
  getAllCustomer,
  updateCustomer,
  deleteCustomer,
  getSingleCustomer,
} = require("../controllers/customerController");

const router = express.Router();

router.route("/customers/add").post(createCustomer);
router.route("/customers").get(getAllCustomer);
router
  .route("/customers/:id")
  .get(getSingleCustomer)
  .put(updateCustomer)
  .delete(deleteCustomer);

module.exports = router;
