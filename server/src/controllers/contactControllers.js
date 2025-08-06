// Modelo de las propiedades de cada contacto
import modelContact from "../models/modelContact.js";

/** Crear un contacto*/
export const createContact = async (request , response) => {
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

/** 
 * Obtener todos los contactos creados de manera ordenada mostrando 
 * los contactos empezando por los que se crearón de manera reciente
*/

export const allContacts = async (request , response) => {
  try {
    const contacts = await modelContact.find().sort({ createdAt: -1 })
    response.json(contacts);
  } catch (error) {
    response.status(500).json({error: error.message})
  }
}

/** Obtener un solo contacto de la base de datos mediante el parámetro del Id */
export const oneContact = async (request , response) => {
  try {
    const { id } = request.params;
    const contact = await modelContact.findById(id)

    if (!contact) {
      return response.status(404).json({error: "Contact not found"})
    }

    response.json(contact)
  } catch (error) {
    response.status(500).json({error: error.message})
  }
}

export const updateContact = async (request, response) => {
  try {
    const { id, body } = request.params;
    const contactUpdate = await modelContact.findByIdAndUpdate(id , body , {new: true, runValidators: true})

    if (!contactUpdate) {
      return response.status(404).json({error: "The contact cannot be updated. It was not found"})
    }

    response.json(contactUpdate);
  } catch (error) {
    response.status(400).json({error: error.message})
  }
}

export const deleteContact = async (request , response) => {
  try {
    const { id } = request.params;
    const contact = await modelContact.findByIdAndDelete(id);

    if (!contact) {
      return response.status("404").json({error: "Contact Not Found"})
    }

    response.json({
      message: "Contact deleted successfully"
    })
  } catch (error) {
     response.status(500).json({error: error.message})
  }
}
