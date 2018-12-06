'use strict';
import cors from 'cors';
import express from 'express';
import routes from './REST/routes';

const app = express();
app.listen(3000, () => {
  console.log('Server is running');
});

app.use(cors());

app.use(express.static('public'));


app.listen(process.env.PORT || 3000, function () {
  console.info('Server is running')
});

mongoose.connect(config.databaseUrl, {useNewUrlParser: true, useCreateIndex: true}, (error) => {
  if (error) {
    console.error(error);
  }
  else {
    console.log('Connect with database established');
}
});
process.on('SIGINT', () => {
  mongoose.connection.close(function () {
  console.error('Mongoose default connection disconnected through app termination');
  process.exit(0);
});
});

routes(app);
app.listen(config.port, () => {
  console.info(`Server is running at ${config.port}`)
});
