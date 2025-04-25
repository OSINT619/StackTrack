const express = require('express');
const Program = require('../models/Program');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const programs = await Program.find();
    res.json(programs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const program = new Program({
    name: req.body.name,
    category: req.body.category,
    features: req.body.features,
    notes: req.body.notes,
    referenceMaterial: req.body.referenceMaterial,
  });

  try {
    const newProgram = await program.save();
    res.status(201).json(newProgram);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;