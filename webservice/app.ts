import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as mongoose from 'mongoose';
import * as morgan from 'morgan';
import * as path from 'path';
import * as http from 'http';
import * as httpProxy from 'http-proxy';
import * as HttpProxyRules from 'http-proxy-rules';

import setRoutes from './routes';

const app = express();
dotenv.load({ path: '.env' });
app.set('port', process.env.PORT || 3000);

app.use('/', express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));

// The database does not need to be open for this to work
const proxyRules = new HttpProxyRules({
  rules: {
    '.*/ris(.*)': process.env.RIS_BASE_URL + '/ris$1'
  }
});

// Create reverse proxy instance
const proxy = httpProxy.createProxy();

mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });
const db = mongoose.connection;
(<any>mongoose).Promise = global.Promise;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');

  setRoutes(app);

  app.post('/ris*', function (req, res) {
    const target = proxyRules.match(req);
    if (target) {
      return proxy.web(req, res, {
        target: target
      });
    }
  });

  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.listen(app.get('port'), () => {
    console.log('Webservice listening on port ' + app.get('port'));
  });
});

export { app };
