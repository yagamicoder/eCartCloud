import historyApiFallback from 'connect-history-api-fallback';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import {chalkSuccess, chalkProcessing} from './chalkConfig';
import config from '../webpack.config.dev';
import express from 'express';
import http from 'http';
import socketio from 'socket.io';

const bundler = webpack(config);
const app = express();
const server = http.createServer(app);
const io = socketio(server);
console.log(chalkProcessing('Starting Express server...'));

io.on('connection', () => {
  console.log(chalkSuccess('Socket.io is connected.'));
  //socket.emit('welcome', { hello: 'world' });
});

app.use(express.static('src/*.html'));
app.use(historyApiFallback());
app.use(webpackHotMiddleware(bundler));
app.use(webpackDevMiddleware(bundler, {
    // Dev middleware can't access config, so we provide publicPath
    publicPath: config.output.publicPath,

    // These settings suppress noisy webpack output so only errors are displayed to the console.
    noInfo: false,
    quiet: false,
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false
    },

    // for other settings see
    // http://webpack.github.io/docs/webpack-dev-middleware.html
}));
server.listen(3000);
console.log(chalkSuccess('Express server is listening on port: ' + server.address().port));
