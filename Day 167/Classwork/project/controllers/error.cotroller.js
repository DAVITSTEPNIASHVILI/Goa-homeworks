const globalErrorHandling = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500
    err.status = err.status || "error"

    if (process.env.NODE_ENV === "development") {
        res.status(res.statusCode).json({
            status: err.status,
            message: err.message,
            stack: err.stack,
            error: err
        })
    } else {
        res.status(res.statusCode).json({
            status: err.status,
            message: err.message,
        })
    }
}

export default globalErrorHandling