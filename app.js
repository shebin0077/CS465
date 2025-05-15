var createError = require('http-errors');

var cookieParser = require('cookie-parser');
var logger = require('morgan');


const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const indexRouter = require('./app_server/routes/index');
var apiRouter = require('./app_api/routes/index');

const app = express();
require('./app_api/models/db'); // Connect to DB

// Handlebars setup
app.engine('hbs', exphbs.engine({
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'app_server/views/layouts')
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server', 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use('/', indexRouter);
// app.use('/users', apiRouter);
// app.use('/travel', apiRouter);

app.use('/api', apiRouter);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});