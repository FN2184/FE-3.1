const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  name: String,
  email: String,
  roomType: String,
  checkIn: Date,
  checkOut: Date,
});

module.exports = mongoose.model('Reservation', reservationSchema);
