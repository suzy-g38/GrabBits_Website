import Job from "../models/job.model.js";

const addJob = async (req, res) => {
  const {role, location, companyName, stipend, batch} = req.body;
  if (!role || !companyName || !batch || !location || stipend < 1) {
    res.status(400).json({ message: "Please Provide valid details" });
    throw new Error("Please provide valid details");
  }

  const job = new Job({
    role, 
    location, 
    companyName, 
    stipend, 
    batch,
  });
  await job.save();

  res.status(201).json({ job, message: "Contact created successfully" });
};

const getAllJobs = async (req, res) => {};
const getJobById = async (req, res) => {};
const deleteJobById = async (req, res) => {};

export { addJob, getAllJobs, getJobById, deleteJobById };
