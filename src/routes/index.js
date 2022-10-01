const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newsRouter);
    // app.get('/news', (req, res) => {
    //   console.log(req.query.q);
    //   res.render('news')
    // });
    app.use('/', siteRouter);
}

module.exports = route;
