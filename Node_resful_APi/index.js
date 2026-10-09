const express = require('express')

const app = express()
const fs = require('fs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

const port = 3000

let movies = []
if (fs.existsSync('movies.json')) {
    movies = JSON.parse(
        fs.readFileSync('movies.json', 'utf8')
    );
} else {
    movies = [{
        id: '1',
        title: 'Inception',
        director: 'Christopher Nolan',
        release_date: '2010-07-16'
    },
    {
        id: '2',
        title: 'The Dark Knight',
        director: 'Christopher Nolan',
        release_date: '2008-07-18'
    },
    {
        id: '3',
        title: 'Interstellar',
        director: 'Christopher Nolan',
        release_date: '2014-11-07'
    },
    ];
    fs.writeFileSync(
        'movies.json',
        JSON.stringify(movies, null, 2)
    );
}

app.get('/', (req, res) => {
    res.send('Welcome to the Movie API! Go to <a href="/movie">/movie</a> to see the movies.')


})

app.get('/movie', (req, res) => {
    res.json(movies)
})

// add a movie
app.post('/movie', (req, res) => {

    const movie = req.body;

    movies.push(movie);

    fs.writeFileSync('movies.json', JSON.stringify(movies, null, 2));

    console.log("Updated Movies:");
    console.log(movies);

    // res.send("Movie Added Successfully");
    res.redirect('/movie')
});

app.get('/movie/:id', (req, res) => {
    const id = req.params.id;

    for (let movie of movies) {
        if (movie && movie.id === id) {
            res.json(movie)
            return
        }
    }
    res.status(404).send('Movie not Found')
})

// delete a movie
app.delete('/movie/:id', (req, res) => {
    const id = req.params.id;

    const initialLength = movies.length;
    movies = movies.filter((movie) => movie && movie.id !== id);

    if (movies.length === initialLength) {
        return res.status(404).send('Movie not Found');
    }

    fs.writeFileSync('movies.json', JSON.stringify(movies, null, 2));
    res.send("Movie is deleted")
})

app.listen(port, () => {
    console.log(`movie api is running on port ${port}`)
})