import Job from "../models/job.model.js";

const addJob = async (req, res) => {
  const { role, location, companyName, stipend, batch, description } = req.body;
  if (
    !role ||
    !companyName ||
    !batch ||
    !location ||
    !description ||
    !stipend < 1
  ) {
    res.status(400).json({ message: "Please Provide valid details" });
    // throw new Error("Please provide valid details");
  }
  console.log(req.files);
  const imageBuffer = req.files[0].buffer ? req.files[0].buffer : null;

  const job = new Job({
    role,
    location,
    companyName,
    stipend,
    batch,
    description,
    image: imageBuffer,
  });
  console.log(job);
  await job.save();

  res.status(201).json({ job, message: "Contact created successfully" });
};

const getAllJobs = async (req, res) => {
  const jobs = await Job.find().sort({ createdAt: -1 });
  res.status(200).json({ jobs, message: "Fetched Jobs Successfully" });
};

const getJobById = async (req, res) => {
  const _id = req.params.id;
  const job = await Job.find({ _id });
  res.status(200).json({ job, message: "Fetched Job Successfully" });
};

const deleteJobById = async (req, res) => {
  const _id = req.params.id;
  await Job.deleteOne({ _id });
  res.status(200).json({ message: "Job Deleted Successfully" });
};

const deleteAllJobs = async (req, res) => {
  await Job.deleteMany();
  res.status(200).json({ message: "Jobs Deleted Successfully" });
};

export { addJob, getAllJobs, getJobById, deleteJobById, deleteAllJobs };
