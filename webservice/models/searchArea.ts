import * as bcrypt from 'bcryptjs';
import * as mongoose from 'mongoose';
import * as jwt from 'jsonwebtoken';

const searchAreaSchema = new mongoose.Schema({
 name: String,
 identifier: {type: String, unique: true},
 JSONObject: JSON
});

const SearchArea = mongoose.model('search-area', searchAreaSchema);

export default SearchArea;
