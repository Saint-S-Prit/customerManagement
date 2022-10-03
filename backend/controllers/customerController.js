const Customer = require("../models/Customer");

//Create Customer
exports.createCustomer = async (req, res, next) => {
  const customer = await Customer.create(req.body);
  res.status(201).json({
    success: true,
    customer,
  });
};

//Get All Customer
exports.getAllCustomer = async (req, res, next) => {
  const customers = await Customer.find();

  res.status(201).json({
    success: true,
    customers,
  });
};

//Get single Customer
exports.getSingleCustomer = async (req, res, next) => {
  const customer = await Customer.findById(req.params.id);
  if (!customer) {
    return res.status(404).json({
      success: true,
      message: "Customer is not found with this id",
    });
  }
  res.status(200).json({
    success: true,
    customer,
  });
};

//Update Customer
exports.updateCustomer = async (req, res, next) => {
  let customer = await Customer.findById(req.params.id);
  if (!customer) {
    return res.status(404).json({
      success: true,
      message: "Customer is not found with this id",
    });
  }

  customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useUnified: false,
  });
  res.status(200).json({
    success: true,
    customer,
  });
};

// Delete Customer
exports.deleteCustomer = async (req, res, next) => {
  const customer = await Customer.findById(req.params.id);

  if (!customer) {
    return res.status(404).json({
      success: true,
      message: "Customer is not found with this id",
    });
  }

  await customer.remove();

  res.status(200).json({
    success: true,
    message: "customer deleted succesfully",
  });
};
