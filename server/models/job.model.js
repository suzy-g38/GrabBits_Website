import mongoose from "mongoose";
import { Schema } from "mongoose";

const JobModel = new Schema({
  role: {
    type: String,
    required,
  },
  location: {
    type: String,
    required,
  },
  companyName: {
    type: String,
    required,
  },
  stipend: {
    type: String,
    default: "Unavailable",
  },
  batch: {
    type: String,
    required,
  },
});

const Job = mongoose.model("Job", JobModel);

export default Job;
