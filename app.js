var express = require('express'),
    app = express(),
    routes = require('./routes');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

app.use( express.static(__dirname + '/node_modules') );
app.use( express.static(__dirname + '/public') );

app.get('/', routes.home);
app.get('/star_wars_episode/:ep_num?', routes.movie_single);
app.get('*', routes.notFound);

app.listen(app.get('port'), function () {
    console.log('App is running at localhost:3000');
});