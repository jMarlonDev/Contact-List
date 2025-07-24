// Modelo de las propiedades de cada contacto
import modelContact from "../models/modelContact";

const createContact = async (request , response) => {
  try {
    const contact = new modelContact(request.body);
    await contact.save();
    response.status(201).json(contact);
  } catch (error) {
    response.status(400).json({
      error: error.message
    })
  }
}

export default { createContact }