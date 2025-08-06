import {express , Router} from "express";
import { createContact } from "../controllers/contactControllers";

const router = Router();

router.post("/contacts", createContact);

export default router;


