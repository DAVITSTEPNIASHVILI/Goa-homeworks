from django.shortcuts import render

# Create your views here.
movies_database = [
    {"id": 0, "title": "Interstellar", "year": 2014, "rating": 8.7},
    {"id": 1, "title": "Inception", "year": 2010, "rating": 8.8},
    {"id": 2, "title": "The Dark Knight", "year": 2008, "rating": 9.0},
    {"id": 3, "title": "The Matrix", "year": 1999, "rating": 8.7},
    {"id": 4, "title": "Forrest Gump", "year": 1994, "rating": 8.8},
    {"id": 5, "title": "The Shawshank Redemption", "year": 1994, "rating": 9.3},
    {"id": 6, "title": "Fight Club", "year": 1999, "rating": 8.8},
    {"id": 7, "title": "The Godfather", "year": 1972, "rating": 9.2},
    {"id": 8, "title": "Pulp Fiction", "year": 1994, "rating": 8.9},
    {"id": 9, "title": "Gladiator", "year": 2000, "rating": 8.5},
    {"id": 10, "title": "The Prestige", "year": 2006, "rating": 8.5},
    {"id": 11, "title": "Whiplash", "year": 2014, "rating": 8.5},
    {"id": 12, "title": "The Green Mile", "year": 1999, "rating": 8.6},
    {"id": 13, "title": "Parasite", "year": 2019, "rating": 8.5},
    {"id": 14, "title": "Joker", "year": 2019, "rating": 8.4},
    {"id": 15, "title": "Dune", "year": 2021, "rating": 8.0},
    {"id": 16, "title": "Oppenheimer", "year": 2023, "rating": 8.3},
    {"id": 17, "title": "Avatar", "year": 2009, "rating": 7.9},
    {"id": 18, "title": "Titanic", "year": 1997, "rating": 7.9},
    {"id": 19, "title": "The Lion King", "year": 1994, "rating": 8.5}
]

def all_movies(req):
    return render(req, 'all_movies.html', {
        'movies': movies_database
    })

def movie_info(req, id):
    movie_info = None

    for movie in movies_database:
        if movie["id"] == id:
            movie_info = movie

    return render(req, 'movie_info.html', {
        'movie': movie_info
    })