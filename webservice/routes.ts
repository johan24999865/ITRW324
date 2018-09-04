import * as express from "express";
import LocationCtrl from "./controllers/location";
import SearchAreaCtrl from "./controllers/searchArea";



export default function setRoutes(app) {
  const router = express.Router();

  const locationCtrl = new LocationCtrl;
  const searchAreaCtrl = new SearchAreaCtrl;

  //locations
  router.route('/locations').get(locationCtrl.getAll);
  router.route('/location').post(locationCtrl.insert);
  router.route('/location/:id').put(locationCtrl.update);
  router.route('/location/:id').delete(locationCtrl.delete);

  //searchAreas
  router.route('/search-areas').get(searchAreaCtrl.getAll);
  router.route('/search-area').post(searchAreaCtrl.insert);
  router.route('/search-area/:id').put(searchAreaCtrl.update);
  router.route('/search-area/:id').delete(searchAreaCtrl.delete);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);
}
