// import contactsService from "../services/contactsServices.js";

import { getAllContactsService } from "../services/contactsServices.js";

export const getAllContacts = async (req, res, next) => {
  const { _id } = req.user;
  const result = await getAllContactsService(_id);
  res.json(result);
};

export const deleteContact = (req, res) => {};

export const createContact = (req, res) => {};
