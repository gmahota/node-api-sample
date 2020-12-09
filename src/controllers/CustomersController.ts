import { Request, Response } from "express";
import Customer from "../models/Customer";
import customerView from "../views/customers_view";

const customerList: Customer[] = [
  { "id": 1, "name": "João Andre", "address": "Maputo", "vat": "4212345" },
  { "id": 2, "name": "Ana Batista", "address": "Beira", "vat": "421123" },
  { "id": 3, "name": "Joana Andre", "address": "Nampula", "vat": "4211234" },
  { "id": 4, "name": "João Adão", "address": "Xai-Xai", "vat": "421129" },
  { "id": 5, "name": "Manuel Jose", "address": "Sofala", "vat": "4231234" },
];

const show = async function (request: Request, response: Response) {
  const { id } = request.params;

  const customer = customerList.find((c) => c.id.toString() === id);

  if (customer) {
    return response.json(customerView.render(customer));
  } else {
    return response.status(401).json({ msg: "customer not found" });
  }
};

const index = async function (request: Request, response: Response) {
  return response.json(customerView.renderMany(customerList));
};

const create = async function (request: Request, response: Response) {
  const {
    name,
    address,
    vat,
  } = request.body;

  const customer = {
    id: customerList.length +1,
    name,
    address,
    vat,
  };

  customerList.push(customer);

  return response.status(201).json(customerList);
};

export default {
  create,
  index,
  show,
};
