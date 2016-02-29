var moviesJSON = require('../movies.json'),
    movies = moviesJSON.movies;

exports.home = function (req, res) {
    res.render('home', {
        title: 'Star Wars Movies',
        movies: movies
    });
};

exports.movie_single = function (req, res) {
    var ep_num = req.params.ep_num,
        movie = movies[ep_num - 1];

    if(ep_num >=1 && ep_num <= 6) {
        res.render('movie_single', {
            movies: movies,
            title: movie.title,
            movie: movie,
            main_chrs: movie.main_characters
        });
    } else {
        res.render('notFound', {
            movies: movies,
            title: 'The page you are looking for doesn\'t exist!'
        });
    }
};

exports.notFound = function (req, res) {
    res.render('notFound', {
        movies: movies,
        title: 'The page you are looking for doesn\'t exist!'
    });
};