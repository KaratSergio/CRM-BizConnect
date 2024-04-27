import { Contact } from "../db/models/Contact.js";

export const getAllContactsService = (owner) => {
    const allContacts = Contact.find({ owner })
    return allContacts
};
