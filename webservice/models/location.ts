import * as bcrypt from 'bcryptjs';
import * as mongoose from 'mongoose';
import * as jwt from 'jsonwebtoken';

const locationSchema = new mongoose.Schema({
 name: String,
 Lat: Number,
 Long: Number,
 QRCode: {type: String, unique: true}
});

const LocationModel = mongoose.model('location', locationSchema);

export default LocationModel;
