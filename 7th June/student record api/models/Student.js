import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollNo: {
    type: Number,
    required: true,
    unique: true,
  },
  courses: {
    type: [String],
    required: true,
  },
  GPA: {
    type: Number,
    required: true,
  },
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
