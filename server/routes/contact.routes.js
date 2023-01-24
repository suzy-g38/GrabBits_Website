import express from "express";
import {
  addContact,
  getAllContacts,
} from "../controllers/contact.controller.js";

const contactRouter = express.Router();

contactRouter.route("/createContact").post(addContact);
contactRouter.route("/getContacts").get(getAllContacts);

export default contactRouter;
