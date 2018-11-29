const app = require('./app');

const { PORT = 9090 } = require('./config');

app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
});
