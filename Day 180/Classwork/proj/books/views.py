from django.shortcuts import render

# Create your views here.
books_database = [
    {"id": 0, "title": "Harry Potter", "author": "J. K. Rowling", "pages": 320},
    {"id": 1, "title": "The Hobbit", "author": "J. R. R. Tolkien", "pages": 310},
    {"id": 2, "title": "The Lord of the Rings", "author": "J. R. R. Tolkien", "pages": 1178},
    {"id": 3, "title": "1984", "author": "George Orwell", "pages": 328},
    {"id": 4, "title": "Animal Farm", "author": "George Orwell", "pages": 112},
    {"id": 5, "title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "pages": 180},
    {"id": 6, "title": "To Kill a Mockingbird", "author": "Harper Lee", "pages": 281},
    {"id": 7, "title": "Pride and Prejudice", "author": "Jane Austen", "pages": 432},
    {"id": 8, "title": "The Catcher in the Rye", "author": "J. D. Salinger", "pages": 234},
    {"id": 9, "title": "The Alchemist", "author": "Paulo Coelho", "pages": 208},
    {"id": 10, "title": "The Da Vinci Code", "author": "Dan Brown", "pages": 489},
    {"id": 11, "title": "The Hunger Games", "author": "Suzanne Collins", "pages": 374},
    {"id": 12, "title": "The Book Thief", "author": "Markus Zusak", "pages": 552},
    {"id": 13, "title": "The Chronicles of Narnia", "author": "C. S. Lewis", "pages": 768},
    {"id": 14, "title": "Dune", "author": "Frank Herbert", "pages": 688},
    {"id": 15, "title": "The Little Prince", "author": "Antoine de Saint-Exupéry", "pages": 96},
    {"id": 16, "title": "Dracula", "author": "Bram Stoker", "pages": 418},
    {"id": 17, "title": "Frankenstein", "author": "Mary Shelley", "pages": 280},
    {"id": 18, "title": "The Kite Runner", "author": "Khaled Hosseini", "pages": 371},
    {"id": 19, "title": "The Fault in Our Stars", "author": "John Green", "pages": 313}
]

def all_books(req):
    return render(req, 'all_books.html', {
        'books': books_database
    })

def book_details(req, id):
    book_info = None

    for book in books_database:
        if book["id"] == id:
            book_info = book

    return render(req, 'book_info.html', {
        'book': book_info
    })

def title_by_id(req, id):
    book_title = None

    for book in books_database:
        if book["id"] == id:
            book_title = book["title"]

    return render(req, 'titleById.html', {
        'books_title': book_title
    })