const app = require('./lib/app');
require('dotenv').config();

const PORT = process.env.PORT || 7891;

app.listen(PORT, () => {
  console.log('listening on 3000');
});
