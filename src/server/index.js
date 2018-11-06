const express = require('express');
const path = require('path');
const morgan = require('morgan');
const compression = require('compression');

const PORT = 3000;

const app = express();

app.use(morgan('tiny'));
app.use(compression({ level: 9 }));
app.use('/assets', express.static(`${process.cwd()}/assets`));

app.get('/', (req, res) => {
  res.sendFile(path.join(`${process.cwd()}/src/client/index.html`));
});

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}!🦄`);
});
