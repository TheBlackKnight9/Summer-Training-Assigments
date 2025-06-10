import express from "express";
import Student from "../models/Student.js";

const router = express.Router();


router.post("/", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.get("/", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const students = await Student.find()
      .sort({ GPA: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get("/:rollNo", async (req, res) => {
  try {
    const student = await Student.findOne({ rollNo: req.params.rollNo });
    if (!student) return res.status(404).json({ error: "Student not found" });
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.put("/:rollNo", async (req, res) => {
  try {
    const updated = await Student.findOneAndUpdate(
      { rollNo: req.params.rollNo },
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ error: "Student not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.delete("/:rollNo", async (req, res) => {
  try {
    const deleted = await Student.findOneAndDelete({ rollNo: req.params.rollNo });
    if (!deleted) return res.status(404).json({ error: "Student not found" });
    res.json({ message: "Student deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
