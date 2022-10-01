const path = require('path');
const express = require('express');
const morgan = require('morgan');

var exphbs = require('express-handlebars');

const app = express();
app.use('/', express.static(path.join(__dirname, 'public')));
const port = 3001;
const route = require('./routes');
// HTTP logger
app.use(morgan('combined'));
// Template engine
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');

app.engine(
    'hbs',
    exphbs({
        extname: '.hbs',
    }),
);
app.set(
    'view engine',

    'hbs',
);

console.log(__dirname);
console.log('PATH: ', path.join(__dirname, 'views'));
console.log('PATH: ', path.join(__dirname, 'resources/views'));
// app.set('views', path.join(__dirname,'resources/views'));
// app.set('views', path.join(__dirname, 'resources/views'));
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

            app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// "beautiful": "prettier --single-quote --trailing-comma all --tab-width 4 --write \"src/**/*.{js,json,scss}\"",
