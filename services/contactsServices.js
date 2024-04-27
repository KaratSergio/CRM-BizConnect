import { Contact } from "../db/models/Contact.js";

export const getAllContactsService = (owner) => Contact.find({ owner });
export const createContactService = (data) => Contact.create(data);
export const deleteContactsService = (filter) =>
  Contact.findOneAndDelete(filter);
