// import contactsService from "../services/contactsServices.js";
import HttpError from "../helpers/HttpError.js";
import {
  createContactService,
  deleteContactsService,
  getAllContactsService,
} from "../services/contactsServices.js";

export const getAllContacts = async (req, res, next) => {
  const { _id } = req.user;
  const result = await getAllContactsService(_id);
  res.json(result);
};

export const deleteContact = async (req, res, next) => {
  const { id } = req.params;
  const { _id } = req.user;

  try {
    const deleteContact = await deleteContactsService({ _id: id, owner: _id });
    console.log(deleteContact);
    if (!deleteContact) {
      throw HttpError(404, "This contact is not found");
    }
    res.json(deleteContact);
  } catch (error) {
    next(error);
  }
};

export const createContact = async (req, res) => {
  const { name, number } = req.body;
  const { _id } = req.user;
  const contact = await createContactService({ name, number, owner: _id });
  res.status(201).json(contact);
};
