
const express = require('express');
const upload = require('../config/multerConfig');

const router = express.Router();

router.post('/', upload, (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  res.send({ imageUrl: `/uploads/${req.file.filename}` });
});

module.exports = router;
