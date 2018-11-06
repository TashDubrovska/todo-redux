const express = require('express');
const path = require('path');
const morgan = require('morgan');
const compression = require('compression');
const basePage = require('../../views/src/client/basePage');

const PORT = 3000;

const app = express();

app.use(morgan('tiny'));
app.use(compression({ level: 9 }));
app.use('/assets', express.static(path.join(process.cwd(), 'assets')));

app.get('/', (req, res) => {
  res.send(basePage.render('Hello stranger'));
});

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}!🦄`);
});
