import AppError from "../utils/AppError.js";
import Readfile from "../utils/ReadFile.js";
import Writefile from "../utils/WriteFile.js";
import catchAsync from "../utils/catchAsync.js"

export const getAllBooks = catchAsync(async (req, res, next) => {
    const allBooks = await Readfile(process.env.DB);
    
    if (allBooks.length === 0) {
        return next(new AppError("No books are available!", 400))
    };

    res.status(200).json(allBooks)
});

export const getSingleBook = catchAsync(async (req,res,next) => {
    const allBooks = await Readfile(process.env.DB)
    const id = req.params.id

    const foundBook = allBooks.filter(obj => obj.id === id)

    if (foundBook.length === 0) {
        return next(new AppError("You entered id wrong!", 404))
    }

    res.status(200).json(foundBook)
})

export const addBook = catchAsync(async (req,res,next) => {
    let allBooks = await Readfile(process.env.DB)
    const userInfo = req.body


    if (allBooks.some(book => book.id === userInfo.id)) {
        return next(new AppError("Book already exists!", 400))
    }

    const allProperties = [
        ["id", "string"],
        ["title", "string"],
        ["author", "object"],
        ["category", "string"],
        ["price", "number"],
        ["stockQuantity", "number"],
        ["tags", "object"],
        ["reviews", "object"],
        ["createdAt", "string"]
    ];

    if (Object.keys(userInfo).length !== allProperties.length) {
        return next(new AppError("Invalid number of properties for book to add it in database!", 400))
    }

    for (let key in userInfo) {
        let propValid = false

        for (let propArr of allProperties) {
            if (propArr[0] === key && propArr[1] === typeof userInfo[key]) {
                propValid = true
                break;
            }
        }

        if (!propValid) {
            return next(new AppError("Invalid data to add book!", 400))
        }
    }


    // check author property
    if (Object.keys(userInfo.author).length === 0) {
        return next(new AppError("author property is empty"))
    }

    const authorProps = [
        ["fullName", "string"],
        ["nationality", "string"]
    ]

    for (let key in userInfo.author) {
        let propValid = false

        for (let propArr of authorProps) {
            if (propArr[0] === key && propArr[1] === typeof userInfo.author[key]) {
                propValid = true
                break;
            }
        }

        if (!propValid) {
            return next(new AppError("Properties or their data types are incorrect!", 400))
        }
    }

    // check tags property
    if (userInfo.tags.length === 0 || userInfo.tags.some(el => typeof el !== "string")) {
        return next(new AppError("Tags array is empty or it's values has invalid data types!"))
    }

    // check reviews property
    if (userInfo.reviews.length === 0) {
        return next(new AppError("Reviews array is empty!", 400))
    }

    if (userInfo.reviews.some(el => typeof el !== "object")) {
        return next(new AppError("Invalid data in book's reviews array for book to be added in database!", 400))
    }

    const reviewsProps = [
        ["userName", "string"],
        ["rating", "number"],
        ["comment", "string"]
    ]

    for (let reviewObj of userInfo.reviews) {
        if (Object.keys(reviewObj).length !== 3) {
            return next(new AppError("Invalid length of review's obj's properties!", 400))
        }

        for (let key in reviewObj) {
            let propValid = false

            for (let propArr of reviewsProps) {
                if (propArr[0] === key && propArr[1] === typeof reviewObj[key]) {
                    propValid = true
                    break;
                }
            }

            if (!propValid) {
                return next(new AppError("Invalid data in review's obj!", 400))
            }
        }
    }

    allBooks.push(userInfo)
    await Writefile(process.env.DB, allBooks)

    return res.status(201).json({
        message: "Book added successfully!",
        book: userInfo
    })
})

export const deleteBook = catchAsync(async (req,res,next) => {
    let allBooks = await Readfile(process.env.DB)
    const id = req.params.id

    const bookToDelete = allBooks.filter(book => book.id === id)

    if (bookToDelete.length === 0) {
        return next(new AppError(`Book with id ${id} does not exist`, 404))
    }

    allBooks = allBooks.filter(book => book.id !== id)
    await Writefile(process.env.DB, allBooks)
    return res.status(200).json()
})