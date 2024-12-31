console.log("Welcome to node js");
const movies = [{title:"the nun",genre:"horror",rating:9.2,releaseyear:2018},
                {title:"the nun2",genre:"horror",rating:9.1,releaseyear:2022},
                {title:"interstellar",genre:"science-fiction",rating:9.8,releaseyear:2008},
                {title:"openheighmer",genre:"thriller",rating:9.3,releaseyear:2022},
                {title:"jhon wick",genre:"action",rating:9.6,releaseyear:2014},
                {title:"inception",genre:"thriller",rating:9.67,releaseyear:2010}];

const addMovie = (collection, movie) => {
    collection.push(movie);
};
addMovie(movies, {title:"matrix",genre:"science-fiction",rating: 8.5,releaseyear:2008});
console.log(movies);

const listMoviesByGenre = (collection, genre) => {
    return collection.filter(movie => movie.genre === genre);
};
console.log("List by specific genre :");
console.log(listMoviesByGenre(movies, "science-fiction"));

const findHighestRatedMovie = collection => {
    return collection.reduce((highest, movie) => movie.rating > highest.rating ? movie : highest);
};
console.log("Highest rated movie :");
console.log(findHighestRatedMovie(movies));

const getMovieTitles = collection => {
    return collection.map(movie => movie.title);
};
console.log("Titles of movies :");
console.log(getMovieTitles(movies));

const moviesAfterYear = (collection, year) => {
    return collection.filter(movie => movie.releaseyear > year);
};
console.log("Movies released after 2010 :");
console.log(moviesAfterYear(movies, 2010));

movies.forEach(movie => {
    console.log(`${movie.title} (${movie.releaseyear}) is a ${movie.genre} movie with a rating of ${movie.rating}.`);
});

const searchByTitle = (collection, name1) => {
    return collection.filter(movie => movie.title.includes(name1));
}
console.log(searchByTitle(movies,"cep"));
