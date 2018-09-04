import * as jwt from 'jsonwebtoken';

import SearchArea from '../models/searchArea';
import BaseCtrl from './base';

import * as mongoose from 'mongoose';

export default class SearchAreaCtrl extends BaseCtrl {
  model = SearchArea; 
}
