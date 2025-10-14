const mainDiv = document.getElementById("main-div");

fetch("https://yts.mx/api/v2/list_movies.json")
    .then(res => res.json())
    .then(res => {
        const movies = res.data.movies;
        for (let film of movies) {
        let filmDiv = document.createElement("div");

        let filmId = document.createElement("h3");
        filmId.textContent = `ID: ${film.id}`;
        filmDiv.appendChild(filmId);

        let filmImage = document.createElement("img");
        filmImage.src = film.medium_cover_image;
        filmDiv.appendChild(filmImage);

        let filmTitle = document.createElement("h2");
        filmTitle.textContent = film.title;
        filmDiv.appendChild(filmTitle);

        let filmYear = document.createElement("p");
        filmYear.textContent = `Year: ${film.year}`;
        filmDiv.appendChild(filmYear);

        let filmGenres = document.createElement("h4");
        filmGenres.textContent = `Genres: ${film.genres.join(", ")}`;
        filmDiv.appendChild(filmGenres);

        let filmRating = document.createElement("h5");
        filmRating.textContent = `Rating: ${film.rating} ⭐`;
        filmDiv.appendChild(filmRating);

        mainDiv.appendChild(filmDiv);
        }
    })
    .catch(err => console.error(err));



// შედით jsonplaceholder.com-ზე და მოცემული api link დააკოპირეთ. შემდეგ ეს ლინკი გადაეცით fetch ფუნქციას და საბოლოოდ დაბრუნებული ინფორმაცია დაბეჭდეთ.

// ეს ყველაფერი შეასრულეთ async და await keyword-ების გამოყენებით
const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    console.log(posts);
}