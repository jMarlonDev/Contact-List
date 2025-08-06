import Router from "express";
import { createContact , allContacts, oneContact , updateContact , deleteContact } from "../controllers/contactControllers.js";

const router = Router();

router.post("/", createContact); // Crear un contacto
router.get("/", allContacts); // Obtener la lista de contactos
router.get("/:id", oneContact) // Obtener un solo contacto
router.put("/:id", updateContact) // Actualizar un contacto
router.delete("/:id", deleteContact) // Eliminar un contacto

export default router;


