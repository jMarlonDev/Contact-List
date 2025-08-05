import Router from "express";
import { createContact } from "../controllers/contactControllers";

const router = Router();

router.post("/", createContact);

export default router;


