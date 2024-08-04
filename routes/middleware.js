// middleware.js
const mongoose = require('mongoose');

// Middleware to validate MongoDB ObjectId
exports.validateObjectId = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ msg: 'Invalid ID.' });
    }
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error.' });
  }
};
