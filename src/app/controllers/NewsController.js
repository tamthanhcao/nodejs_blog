class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news'); //render qua view news.hbs sau do gui client
    }
    // [GET] /news/:slug
    show(req, res) {
        res.send('NEWS DETIAL!!!'); // send la gui client truc tiep khong co template (header,footer)
    }
}

module.exports = new NewsController();
