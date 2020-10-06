const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'welcome!',
  });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`the server is Listening at http://localhost:${port}`);
});
