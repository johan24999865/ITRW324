import * as jwt from 'jsonwebtoken';

import LocationModel from '../models/location';
import BaseCtrl from './base';

import * as mongoose from 'mongoose';

export default class LocationCtrl extends BaseCtrl {
  model = LocationModel; 
}
