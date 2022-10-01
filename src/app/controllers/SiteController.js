class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('home'); //render qua view home.hbs sau do gui client
    }
    // [GET] /news/:slug
    show(req, res) {
        res.render('search'); // send la gui client truc tiep khong co template (header,footer)
    }
}

// app.get('/', (req, res) => {
//   var a = 1;
//   var b = 2;
//   var c = a + b;
//   // res.send('Hello World!');
//   res.render('home');
// });

// app.get('/search', (req, res) => {
//   // console.log(req.query);
//   res.render('search');
// });

// app.post('/search', (req, res) => {
//   // console.log(req.query);
//   res.send('search');
// });

module.exports = new NewsController();
