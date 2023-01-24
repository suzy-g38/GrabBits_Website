import Contact from "../models/contact.model.js";


const addContact = async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || message < 1) {
    res.status(400).json({ message: "Please Provide valid details" });
    throw new Error("Please provide valid details");
  }

  const contact = new Contact({
    name,
    email,
    message,
  });
  await contact.save();

  res.status(201).json({ contact, message: "Contact created successfully" });
};
const getAllContacts = async (req, res) => {


  const contacts = await user.find()

  res.status(200).json({ contacts, message: "Fetched Successfully" });
};

export { addContact, getAllContacts };
